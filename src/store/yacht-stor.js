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
        async postReview(context, { review }) {
            var newReview = {
                curryacht: review.yacht,
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
                const updatedyacht = await yachtService.save(curryacht)
                    // const updatedyacht= await yachtService.addReview(newReview,curryacht)
                commit({ type: 'updateyachts', updatedyacht })
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