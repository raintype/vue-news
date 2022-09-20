import { createStore } from 'vuex'
import mutations from './mutations.js';
import actions from './actions.js';

export const store = createStore({
    state () {
      return {
        news: [],
        jobs: [],
        ask: [],
        user: {},
      }
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        }
    },
    mutations,
    actions,
});


