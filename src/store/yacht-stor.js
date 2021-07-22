import { yachtService } from "../services/yacht-service.js";
import { utilService } from '../services/util.service.js';

export const yachtStore = {
    state: {
        yachts: [],
        filterBy: {
            location: '',
            price: 0,
            size: 'All',
            rate: 'All',
            txt: '',
            startDate: "",
            endDate: "",
            guests: 1
        },
        title:''

    },
    getters: {
        getTitle(state) {
            return state.title
        },
        yachtsForShow(state) {
            const { rate, price, size } = state.filterBy
            const regex = new RegExp(state.filterBy.txt, 'i')
            let yachts = state.yachts
            yachts = yachts.filter((yacht) => yacht.price > price)
            switch (size) {
                case 'All' || '':
                    break;
                case 'Small':
                    yachts = yachts.filter((yacht) => yacht.size === 'small');
                    break;
                case 'Medium':
                    yachts = yachts.filter((yacht) => yacht.size === 'medium');
                    break;
                case 'Large':
                    yachts = yachts.filter((yacht) => yacht.size === 'large');
                    break;
            }
            switch (rate) {
                case 'All' || '':
                    break;
                case 1:
                    yachts = yachts.filter((yacht) => Math.floor(yacht.reviews[0].rate) === 1);
                    break;
                case 2:
                    yachts = yachts.filter((yacht) => Math.floor(yacht.reviews[0].rate) === 2);
                    break;
                case 3:
                    yachts = yachts.filter((yacht) => Math.floor(yacht.reviews[0].rate) === 3);
                    break;
                case 4:
                    yachts = yachts.filter((yacht) => Math.floor(yacht.reviews[0].rate) === 4);
                    break;
                case 5:
                    yachts = yachts.filter((yacht) => Math.floor(yacht.reviews[0].rate) === 5);
                    break;
            }
            yachts = yachts.filter(yacht => regex.test(yacht.loc.country || yacht.loc.city || yacht.loc.address))
            return yachts
        },
        getAllUserLike(state, getters) {
            const userId = getters.loggedinUser._id;
            const yachts = []
            state.yachts.forEach(yacht => {
                yacht.favorites.forEach(fav => {
                    if (fav.userId === userId) {
                        yachts.push(yacht)
                    }
                });
            });
            return yachts
        },
    },
    mutations: {
        getYachts(state, { yachts }) {
            state.yachts = yachts
        },

        setFilter(state, payload) {
            console.log('payload.filterBy', payload.filterBy);
            state.filterBy = payload.filterBy
        },
        updateyachts(state, { updatedyacht }) {
            const idx = state.yachts.findIndex(({ _id }) => _id === updatedyacht._id);
            state.yachts.splice(idx, 1, updatedyacht);
        },
        updateYacht(state, { yacht }) {
            const idx = state.yachts.findIndex((y) => y._id === yacht._id);
            state.yachts.splice(idx, 1, yacht);
        },
        addYacht(state, { yacht }) {
            state.yachts.push(yacht);
        },
        removeYacht(state, { id }) {
            const idx = state.yachts.findIndex(y => y._id === id)
            state.yachts.splice(idx, 1)
        },
        results(state, { title }) {
            state.title = title
        }
    },
    actions: {
        searchResults(context, { title }) {
            context.commit({ type: 'results', title })
        },
        async loadYachts(context , { filterBy}) {
            console.log(context, filterBy, 'context stor');
            // if(filterBy)
            try {
                const yachts = await yachtService.query(context.state.filterBy)
                    // console.log(yachts, 'yachts are??');
                context.commit({ type: 'getYachts', yachts })
                return yachts
            } catch (err) {
                console.log('Cannot load yachts');
                throw err;
            }
        },
        async saveYacht({ commit }, { yacht }) {
            const type = yacht._id ? 'updateYacht' : 'addYacht';
            try {
                const savedYacht = await yachtService.save(yacht);
                commit({ type, yacht: savedYacht });

                return savedYacht;
            } catch (err) {
                console.log('Cannot save yacht');
                throw err;
            }
        },
        async removeYacht({ commit }, payload) {
            try {
                await yachtService.remove(payload.id)
                commit(payload)
            } catch (error) {
                console.log('ERROR: could not remove: ', (error))
            }
        },
        async postReview(context, { review }) {
            console.log(context);
            var newReview = {
                // curryacht: review.yacht,
                txt: review.txt,
                avgRate: review.avgRate,
                category: JSON.parse(JSON.stringify(review.category)),
                id: utilService.makeId(), //Move to backend
                by: { // move to backend
                    _id: review.buyer._id,
                    fullname: review.buyer.fullname,
                    imgUrl: review.buyer.imgUrl,
                    time: Date.now()
                }
            }
            newReview.curryacht.reviews.unshift(newReview)
            try {
                const updatedyacht = await yachtService.save()
                    // const updatedyacht= await yachtService.addReview(newReview,curryacht)
                context.commit({ type: 'updateyachts', updatedyacht })
                return updatedyacht
            } catch (err) {
                console.log('from Store: Cannot postReview', err);
                throw err
            }
        },
        async toggleLike(context, { yacht }) {
            const user = context.getters.loggedinUser;
            const favIdx = yacht.favorites && yacht.favorites.findIndex(({ userId }) => user._id === userId);
            if (favIdx >= 0) yacht.favorites.splice(favIdx, 1);
            else yacht.favorites = [{ userId: user._id }];
            try {
                const updatedyacht = await yachtService.save(yacht)
                context.commit({ type: 'updateyachts', updatedyacht })
                return updatedyacht
            } catch (err) {
                console.log('from Store: Cannot toggleLike', err);
                throw new Error('Cannot toggleLike');
            }
        }
    },

}