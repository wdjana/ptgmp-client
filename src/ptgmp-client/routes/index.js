import Home from './Home.vue';
import Login from './Login.vue';

const routes = [];

routes.push({
    path: '/',
    name: 'home',
    component: Home
});

routes.push({
    path: '/login',
    name: 'login',
    component: Login
});

routes.push({
    path: '*',
    redirect: '/'
});

export default routes;
