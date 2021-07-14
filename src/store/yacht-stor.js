import { yachtService } from "../services/yacht-service.js";

export const yachtStore = {
    state: {
        yachts: null,
        // currentFilterBy: {
        //     byName: '',
        //     byPrice: 0,
        //   
        // }
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
    },
    actions: {
       async loadYachts(context) {
           try{
            //    console.log('context.state.currentFilterBy', context.state.currentFilterBy);
              const yachts = await yachtService.query()
              console.log(yachts, 'yachts are??');
              context.commit({ type: 'getYachts', yachts })
              return yachts
           }catch (err) {
            console.log('Cannot load yachts');
            throw err;
          }    
        },
    },

}