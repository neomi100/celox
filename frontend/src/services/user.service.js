import { httpService } from './http.service'

export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update,
    getLoggedinUser,
}

window.userService = userService

async function getUsers() {
    return httpService.get(`user`)
}

async function getById(userId) {
    return httpService.get(`user/${userId}`)
}

function remove(userId) {
    return httpService.delete(`user/${userId}`)
}

async function update(user) {
    return httpService.put(`user/${user._id}`, user)
}

async function login(userCred) {
    const user = await httpService.post('auth/login', userCred);
    if (user) return _saveLocalUser(user);
    else return 'Incorrect username or password.';
}

async function signup(userCred) {
    userCred.imgUrl = require(`@/assets/imgs/icons/userGuest.jpg`);
    userCred.isAdmin = false;
    userCred.notifications = {};
    const user = await httpService.post('auth/signup', userCred)
    return _saveLocalUser(user)
}

async function logout() {
    sessionStorage.clear()
    return await httpService.post('auth/logout')
}

function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user));
    return user;
}

function getLoggedinUser() {
    let user = JSON.parse(sessionStorage.getItem('loggedinUser'));    
    return user;
}