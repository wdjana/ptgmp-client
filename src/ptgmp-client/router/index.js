import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../routes';

Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'active',
});


export default router;
