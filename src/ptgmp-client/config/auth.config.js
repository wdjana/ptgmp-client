const usernamePattern = /^[a-zA-X0-9_-]+$/;
const passwordPattern = /^[a-zA-X0-9]+$/;



export default {
    username: {
        min: 5,
        max: 32,
        pattern: usernamePattern
    },

    password: {
        min: 8,
        max: 32,
        pattern: passwordPattern
    }
};
