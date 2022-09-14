import { createStore } from 'vuex'
import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js';

export const store = createStore({
    state () {
      return {
        news: [],
        jobs: [],
        ask: [],
      }
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        }
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;

        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs
        },
        SET_ASKS(state, ask) {
            state.ask = ask;
        }
    },
    actions: {
        FETCH_NEWS({ commit }) {
            fetchNewsList()
                .then(response => {
                    commit('SET_NEWS', response.data);

                })
                .catch(error => {
                    console.log(error);
                });
        },
        FETCH_JOBS({ commit }) {
            fetchJobsList()
                .then(response => {
                    commit('SET_JOBS', response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        FETCH_ASKS({ commit }) {
            fetchAskList()
                .then(({ data }) => {
                    commit('SET_ASKS', data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
});


