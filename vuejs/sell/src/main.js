// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
//import VueResource from 'vue-resource'
import axios from 'axios'

import routes from './router.config.js'
import App from './App.vue'

import './common/stylus/index.styl'

Vue.use(VueRouter);
//Vue.use(VueResource);

Vue.prototype.$http = axios;// 将 axios对象 挂在到 Vue 原型上

const router = new VueRouter({
    mode:'history',
    /*routes:routerConfig*/ // 简写如下
    routes,
    scrollBehavior:()=>({y:0}),
    linkActiveClass:'active' // 修改默认： 链接 active 状态
});
/* 主程序 入口 渲染 */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
