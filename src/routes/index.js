
//import Vue from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import UserView from '../views/UserView';
import ItemView from '../views/ItemView';
import createListView from '../views/CreateListView.js';



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
            component: createListView('NewsView'),
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('JobsView'),
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
