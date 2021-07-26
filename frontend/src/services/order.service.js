import { httpService } from './http.service'


export const orderService = {
    query,
    save,
    getById,
    remove 
}

function getById(id) {
    return httpService.get(`order/${id}`)
}

function remove(id) {
    return httpService.delete(`order/${id}`)
}

async function query() {
    return httpService.get(`order`)
}

async function save(order) {

    if (order._id) {
        return httpService.put(`order/${order._id}`, order)
    } else {
        
        let asd = {
            createdAt: Date.now(),
            buyer: {
                _id: order.buyer._id,
                fullname: order.buyer.fullname
            },
            totalPrice: order.totalPrice,
            startDate: order.requestedDates[0],
            endDate: order.requestedDates[1],
            guests: {
                adults: order.guest.adultsNum,
            },
            yacht: {
                _id: order.currYacht._id,
                name: order.currYacht.name,
                price: order.currYacht.price
            },
            status: 'pending'
        }
        return httpService.post('order/', asd)
        
    }
}