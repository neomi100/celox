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
            guests:0
        },
        title: ''

    },
    getters: {
        getTitle(state) {
            return state.title
        },
        yachtsForShow(state) {

            const { rate, price, guests } = state.filterBy
            const regex = new RegExp(state.filterBy.txt, 'i')

            let yachts = state.yachts

            yachts = yachts.filter((yacht) => yacht.price > price)

            switch (true) {
                case 'All' || '':
                    break;
                case (guests >= 1 && guests <= 5):

                    yachts = yachts.filter((yacht) => yacht.size === 'small');
                    break;
                case (guests >= 6 && guests <= 12):

                    yachts = yachts.filter((yacht) => yacht.size === 'medium');
                    break;
                case ((guests >= 13) && (guests <= 25)):
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
        sortByPrice(state) {
            return state.yachts.sort((a, b) => {
                return a.price - b.price
            })
        },
        sortByPopularity(state) {
            return state.yachts.sort((a, b) => {
                return b.reviews.length - a.reviews.length
            })
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
            state.filterBy = payload.filterBy
        },
        updateyachts(state, { updatedYacht }) {
            const idx = state.yachts.findIndex(({ _id }) => _id === updatedYacht._id);
            state.yachts.splice(idx, 1, updatedYacht);
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
        async loadYachts(context) {
            // if(filterBy)
            try {
                const yachts = await yachtService.query(context.state.filterBy)
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
                throw error;

            }
        },
        async postReview(context, { review }) {
            console.log(review);
            var newReview = {
                currYacht: review.yacht,
                txt: review.txt,
                rate: review.rate,
                category: JSON.parse(JSON.stringify(review.category)),
                id: utilService.makeId(), //Move to backend
                by: { // move to backend
                    _id: review.buyer._id,
                    fullname: review.buyer.fullname,
                    imgUrl: review.buyer.imgUrl,
                    time: Date.now()
                }
            }
            newReview.currYacht.reviews.unshift(newReview)
            console.log(newReview);
            try {
                const updatedYacht = await yachtService.save(newReview.currYacht)
                    // const updatedYacht= await yachtService.addReview(newReview,currYacht)
                context.commit({ type: 'updateyachts', updatedYacht })
                return updatedYacht
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
                const updatedYacht = await yachtService.save(yacht)
                context.commit({ type: 'updateyachts', updatedYacht })
                return updatedYacht
            } catch (err) {
                console.log('from Store: Cannot toggleLike', err);
                throw new Error('Cannot toggleLike');
            }
        }
    },

}