import io from 'socket.io-client'

export const SOCKET_EMIT_USER_WATCH = 'user-watch';
export const SOCKET_EVENT_USER_UPDATED = 'user-updated';
export const SOCKET_EVENT_REVIEW_ADDED = 'review-added';

const baseUrl = (process.env.NODE_ENV === 'production') ? '' : '//localhost:3030'
export const socketService = createSocketService()

window.socketService = socketService

function createSocketService() {
    var socket
    const socketService = {
        setup() {
            socket = io(baseUrl)
        },

        on(eventName, cb) {
            if (!socket) socketService.setup();
            socket.on(eventName, cb)
        },

        off(eventName, cb) {
            if (!socket) socketService.setup();
            if (!cb) socket.removeAllListeners(eventName)
            socket.off(eventName, cb)
        },
        emit(eventName, data) {
            if (!socket) socketService.setup();
            socket.emit(eventName, data)
        },
        terminate() {
            socket = null
        }
    }
    return socketService
}