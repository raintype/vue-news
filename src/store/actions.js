import { 
    fetchNewsList, 
    fetchJobsList, 
    fetchAskList, 
    fetchList,
    fetchUserInfo, 
    fetchItemInfo } from '../api/index.js';

export default {
    FETCH_NEWS({ commit }) {
        fetchNewsList()
            .then(response => {
                commit('SET_NEWS', response.data);
                return response;
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
    },
    FETCH_USER({ commit }, name){
        fetchUserInfo(name)
            .then(({data }) => {
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_ITEM({ commit }, id){
        fetchItemInfo(id)
            .then(({data}) => {
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then(response => {
                commit('SET_LIST', response.data);
                return response;
            })
            .catch(error => console.log(error));
    },
}
