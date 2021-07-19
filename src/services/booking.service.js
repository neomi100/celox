import httpService from './http.service';

const baseUrl =
    process.env.NODE_ENV !== 'development' ?
    '/api/booking' :
    '//localhost:3000/api/booking';

export const bookingService = {
    query,
    findById,
    add,
    remove,
    check
}

function query(query) {
    var queryURL = `?`
    for (const [key, value] of Object.entries(query)) {
        if (value) queryURL += `${key}=${value}&`
    }
    return httpService.get(`booking/${queryURL}`)
}

function check(booking) {
    return httpService.post(`booking/check`, booking)
}

function findById(bookingId) {
    return httpService.get(`booking/${bookingId}`)
}

function remove(booking) {
    return httpService.delete(`booking/${booking._id}`)
}

function add(booking) {
    return httpService.post(`booking`, booking)
}