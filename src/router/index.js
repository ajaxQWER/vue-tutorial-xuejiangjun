import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Jiangjun from '@/components/jiangjun'
import Boss from '@/components/Boss'


Vue.use(Router)


export default new Router({
    mode: 'history',
    hashbang: false,
    routes: [{
        path: '/',
        name: 'Hello',
        component: Hello
    },
    {
        path: '/jiangjun',
        name: 'Jiangjun我',
        component: Jiangjun
    },
    {
        path: '/boss',
        name: 'Boss',
        component: Boss
    }]

})
