import Vue from 'vue';
import VueRouter from 'vue-router';

import MainPage from '@/pages/MainPage';
import ProductPage from '@/pages/ProductPage';
import NotFoundPage from '@/pages/NotFoundPage';

Vue.use(VueRouter);

const routes = [
    {name: 'notFound', component: NotFoundPage , path: '*'},
    {name: 'main', component: MainPage , path: '/'},
    {name: 'product', component: ProductPage , path: '/product/:id'},
];

const router = new VueRouter({
    routes,
    // mode: 'history'
});

export default router;