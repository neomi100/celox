import { yachtService } from "../services/yacht-service.js";

export const yachtStore = {
    state: {
        yachts: null,
        filterBy: {
            location: '',
            price: '',
            size: 'All',
            rate: 'All',
        }
    },
    getters: {
        yachtsForShow(state) {
            console.log(state.yachts, 'getters');
            return state.yachts
        }
    },
    mutations: {
        getYachts(state, { yachts }) {
            state.yachts = yachts
        },

        setFilter(state, payload) {
            console.log('payload.filterBy', payload.filterBy);
            state.filterBy = payload.filterBy
            // console.log(state.currentFilterBy, 'stor mots');

        },
    },
        actions: {
            async loadYachts(context) {
                try {
                    //    console.log('context.state.currentFilterBy', context.state.filterBy);
                    const yachts = await yachtService.query(context.state.filterBy)
                    console.log(yachts, 'yachts are??');
                    context.commit({ type: 'getYachts', yachts })
                    return yachts
                } catch (err) {
                    console.log('Cannot load yachts');
                    throw err;
                }
            },
        },

    }