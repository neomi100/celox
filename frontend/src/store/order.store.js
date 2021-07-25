import { yachtService } from '../services/yacht-service.js';
import { orderService } from '../services/order.service.js';
import { socketService } from "../services/socket.service.js";

export const orderStore = {
    state: {
        allOrders: [],
        currYachtOrders: [],
        ownerOrders: [],
        owner: null,
    },
    getters: {
        getOwnerOrders(state) {
            return state.ownerOrders;
        },
        pendingOrders(state) {
            return state.ownerOrders.filter(order => {
                return order.status === 'pending'
            });
        },
        getAllOrders(state) {
            return state.allOrders
        },
        getCurrYachtOrders(state) {
            return state.currYachtOrders
        },
        getYachtOrdersTimeStamps(state) {
            return state.currYachtOrders.map((order) => {
                var start = order.startDate.split('/')
                start = new Date(parseInt(start[2], 10), parseInt(start[1], 10) - 1, parseInt(start[0]), 10).getTime();
                var end = order.endDate.split('/')
                end = new Date(parseInt(end[2], 10), parseInt(end[1], 10) - 1, parseInt(end[0]), 10).getTime();
                return [start, end]
            })
        }
    },
    mutations: {
        setOwnerOrders(state, { ownerOrders }) {
            state.ownerOrders = ownerOrders;
        },
        setOwner(state, { owner }) {
            state.owner = owner;
        },
        setAllOrders(state, { allOrders }) {
            state.allOrders = allOrders;
        },
        setCurrYachtOrders(state, { yachtId }) {
            state.currYachtOrders = state.allOrders.filter(order => {
                return (order.yacht._id === yachtId)
            });
        },
    },
    actions: {
        loadAllOrders(context, { yachtId }) {
            try {
                return orderService.query()
                    .then(allOrders => {
                        context.commit({ type: 'setAllOrders', allOrders })
                        context.commit({ type: 'setCurrYachtOrders', yachtId })
                    })
            } catch (err) {
                console.log('orderStore: Error in loadOrders', err)
                throw err
            }
        },
        async loadOwnerOrders({ commit }, { owner }) {
            try {
                commit({ type: 'setOwner', owner })
                const yachts = await yachtService.query();
                const orders = await orderService.query();

                const ownerOrders = orders.filter(order => {
                    return yachts.find(yacht => {
                        return yacht._id === order.yacht._id;
                    })
                })
                commit({ type: 'setOwnerOrders', ownerOrders: ownerOrders })
            } catch (err) {
                console.log('orderStore: Error in loadOwnerOrders', err)
                throw err
            }
        },
        async updateOrderStatus({ dispatch }, { order }) {
            console.log(order.buyer);
            await orderService.save(order)
            dispatch({ type: "loadOwnerOrders", owner: order.buyer });
        },


        async setPendingOrder({ dispatch }, { orderSettings }) {
            var owner = orderSettings.currYacht.owner
            await orderService.save(orderSettings)
            await socketService.emit('renderOrders', owner)
            dispatch({ type: "loadOwnerOrders", owner });
            socketService.emit('loadOrders',(orderSettings))
        },
    }
}