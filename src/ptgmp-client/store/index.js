import Vue from 'vue';
import Vuex from 'vuex';

import { alert } from './alert.store';
import { user } from './user.store';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        alert,
        user,
    }
});

export default store;
