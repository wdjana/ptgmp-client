import config from 'ptgmp/config';
import validator from 'ptgmp/utils/text.validator';

function validateUsername(username) {
    return validator(username, config.auth.username.pattern,
        config.auth.username.min, config.auth.username.max);
}

function validatePassword(password) {
    return validator(password, config.auth.password.pattern,
        config.auth.password.min, config.auth.password.max);
}

function login({ commit, dispatch }, { username, password}) {
    commit('clear');
    dispatch('alert/info', 'proses authentifikasi ... ', { root: true});

    if (config.demo) {
        loginDemo({ commit, dispatch }, { username, password });
    } else {
        loginUser({ commit, dispatch }, { username, password });
    }

    dispatch('alert/delayedClear', null, { root: true });
}

function loginDemo({ commit, dispatch }, { username, password}) {
    if (username == config.demoaccount.name && password == config.demoaccount.password) {
        let { id, name, role_id, role_name, dev_id } = config.demoaccount;
        commit('login', { id, name, role_id, role_name, dev_id });
    } else {
        dispatch('alert/error', 'wrong username or password', { root: true});
    }
}

function loginUser({ commit, dispatch }, { username, password }) {
    let temp = null;
    temp = validateUsername(username);

    if (temp.err) {
        dispatch('alert/error', 'invalid username', { root: true});
    } else if (temp.res) {

        temp = validatePassword(password);

        if (temp.err) {
            dispatch('alert/error', 'invalid password', { root: true});
        } else if (temp.res) {
            temp = true;

            if (config.allowDemoAccount && username == config.demoaccount.name) {
                temp = password == config.demoaccount.password;
            } else {
                // todo add login to server api

                temp = false;
            }

            if (temp) {
                let { id, name, role_id, role_name, dev_id } = config.demoaccount;
                commit('login', { id, name, role_id, role_name, dev_id });
            } else {
                dispatch('alert/error', 'wrong username or password', { root: true});
            }
        }
    }

    dispatch('alert/delayedClear', 2000, { root: true});
}


function logout({ commit }) {
    commit('clear');
}


export const user = {
    namespaced: true,
    state: {
        id: 0,
        name: null,
        roleId: 0,
        roleName: null,
        devId: 0
    },
    actions: {
        login,
        logout
    },
    mutations: {
        clear(state) {
            state.id = 0;
            state.name = null;
            state.roleId = 0;
            state.roleName = null;
            state.devId = 0;
        },
        login(state, { id, name, role_id, role_name, dev_id}) {
            state.id = id;
            state.name = name;
            state.roleId = role_id;
            state.roleName = role_name;
            state.devId = dev_id || 0;
        }
    },
};
