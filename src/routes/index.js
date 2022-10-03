
//import Vue from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import UserView from '../views/UserView';
import ItemView from '../views/ItemView';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
// import createListView from '../views/CreateListView.js';
import { store } from '../store/index.js'

export const router = createRouter({
    history: createWebHashHistory(),
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news',
            name: 'news',
            //component: createListView('NewsView'),
            component: NewsView,
            beforeEnter: (to, from, next) =>{
                //this.emitter.emit("start:spinner");
                

                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        //console.log('fetched');
                        //this.emitter.emit("end:spinner");
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });

            },
        },
        {
            path: '/ask',
            name: 'ask',
            //component: createListView('AskView'),
            component: AskView,
            beforeEnter: (to, from, next) =>{
                //this.emitter.emit("start:spinner");
                

                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        //console.log('fetched');
                        //this.emitter.emit("end:spinner");
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });

            },
        },
        {
            path: '/jobs',
            name: 'jobs',
            //component: createListView('JobsView'),
            component: JobsView,
            beforeEnter: (to, from, next) =>{
                //this.emitter.emit("start:spinner");
                

                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        //console.log('fetched');
                        //this.emitter.emit("end:spinner");
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });

            },
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        }
    ]
})
