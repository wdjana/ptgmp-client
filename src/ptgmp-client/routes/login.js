import config from 'ptgmp/config';

export default {

    data() {
        return {
            // message: null,
            username: null,
            password: null,
        };
    },

    methods: {
        onLogin() {
            console.log('login called');

            let { username, password } = this;
            let { dispatch } = this.$store;
            dispatch('user/login', { username, password });
        }
    },

    computed: {
        message() {
            let { message } = this.$store.state.alert;
            return message;
        },

        isDemo() {
            return config.allowDemoAccount;
        },

        demoName() {
            return config.demoaccount.name;
        },

        demoPassword() {
            return config.demoaccount.password
        }
    }
}
