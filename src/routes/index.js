
//import Vue from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView';
import ItemView from '../views/ItemView';



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
            component: NewsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
        {
            path: '/user',
            component: UserView,
        },
        {
            path: '/itme',
            component: ItemView,
        }
    ]
})
