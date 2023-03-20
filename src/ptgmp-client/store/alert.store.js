const default_timeout = 500; // seconds

let timeout = null;

export const alert = {
    namespaced: true,
    state: {
        type: null,
        message: null,
        items: [],
        close: false
    },

    actions: {
        error({ dispatch }, obj) {
            dispatch('push', { type: 'alert-danger', obj });
        },

        info({ dispatch }, obj) {
            dispatch('push', { type: 'alert-info', obj });
        },

        success({ dispatch }, obj) {
            dispatch('push', { type: 'alert-success', obj });
        },

        warning({ dispatch }, obj) {
            dispatch('push', { type: 'alert-warning', obj });
        },
                
        push({ commit }, { type, obj }) {
            let message = null;
            let items = [];
            let close = false;

            // console.log({ obj });

            if (obj) {

                if (typeof obj === 'string') {
                    message = obj;
                } else if (typeof obj === 'object') {
                    message = obj.message || null;
                    items = obj.items ? obj.items : [];
                    close = obj.close ? true : false;
                }
            }

            if (message) {
                commit('push', { type, message, items, close });
            } else {
                commit('clear');
            }
        },


        pushItem({ commit }, item) {
            commit('pushItem', item);
        },
        delayedClear({ dispatch }, seconds ) {
            seconds = seconds > default_timeout ? seconds : default_timeout;

            if (timeout) {
                clearTimeout(timeout);
            }

            return new Promise(function(resolve) {
                timeout = setTimeout(function() {
                    dispatch('clear');
                    resolve(true);
                }, seconds);
            });

        },

        clear({ commit }){
            commit('clear');
        },
    },
    mutations: {
        push(state, { type, message, items, close }) {
            state.type = type;
            state.message = message;
            state.items = [];
            state.close = close;

            if (items && items.length > 0) {
                for(let item of items) {
                    state.items.push(item);
                }
            }
        },

        pushItem(state, item) {
            state.items.push(item);
        },

        clear(state) {
            state.type = null;
            state.message = null;
            state.items = [];
            state.close = false;
        }
    },
};
