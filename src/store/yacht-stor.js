import { yachtService } from "../services/yacht-service.js";
import { utilService } from '../services/util.service.js';


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
            return state.yachts
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
                // console.log(state.currentFilterBy, 'stor mots');

        },
        updateyachts(state, { updatedyacht }) {
            const idx = state.yachts.findIndex(({ _id }) => _id === updatedyacht._id);
            state.yachts.splice(idx, 1, updatedyacht);
        },

    },
    actions: {
        async loadYachts(context) {
            try {
                   console.log('context.state.filterBy', context.state.filterBy);
                const yachts = await yachtService.query(context.state.filterBy)
                console.log(yachts, 'yachts are??');
                context.commit({ type: 'getYachts', yachts })
                return yachts
            } catch (err) {
                console.log('Cannot load yachts');
                throw err;
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