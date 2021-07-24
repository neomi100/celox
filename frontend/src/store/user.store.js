import { userService } from '../services/user.service.js';

export const userStore = {
    state: {
        users: [],
        user: userService.getLoggedinUser(),
        msg: '',
    },
    getters: {
        users(state) {
            return state.users;
        },
        loggedinUser(state) {
            return state.user;
        },
        msg(state) {
            return state.msg;
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        },
        setUsers(state, { users }) {
            state.users = users;
        },
        removeUser(state, { userId }) {
            state.users = state.users.filter(user => user._id !== userId)
        },
        setMsg(state, { msg }) {
            state.msg = msg
        }
    },
    actions: {
        async login({ commit }, { userCred }) {
            try {
                const user = await userService.login(userCred);
                if (user._id) commit({ type: 'setUser', user })
                else {
                    console.log('user in else:', user);
                    commit({ type: 'setMsg', msg: user })
                }
                return user
            } catch (err) {
                console.log('userStore: Error in login', err)
                throw err
            }
        },
        async signup({ commit }, { userCred }) {
            try {
                userCred = JSON.parse(JSON.stringify(userCred))
                const user = await userService.signup(userCred)
                if (user._id) commit({ type: 'setUser', user })
                else commit({ type: 'setMsg', msg: user })
                return user;
            } catch (err) {
                console.log('userStore: Error in signup', err)
                throw err
            }
        },
        async logout({ commit }) {
            try {
                await userService.logout()
                commit({ type: 'setUser', user: null })
                    // commit({ type: 'setMsg', msg: '' })
            } catch (err) {
                console.log('userStore: Error in logout', err)
                throw err
            }
        },
        async loadUsers({ commit }) {
            try {
                const users = await userService.getUsers();
                commit({ type: 'setUsers', users })
            } catch (err) {
                console.log('userStore: Error in loadUsers', err)
                throw err
            }
        },
        async removeUser({ commit }, { userId }) {
            try {
                await userService.remove(userId);
                commit({ type: 'removeUser', userId })
            } catch (err) {
                console.log('userStore: Error in removeUser', err)
                throw err
            }
        },
        async updateUser({ commit }, { user }) {
            try {
                user = await userService.update(user);
                commit({ type: 'setUser', user })
            } catch (err) {
                console.log('userStore: Error in updateUser', err)
                throw err
            }

        }

    }
}