<template lang="html">
    <div class="component-container">
        <div class="component-container" v-if="loggedIn" >
            <home />
            <alert-container>
                <app-alert v-if="$store.state.alert.message" />
            </alert-container>
        </div>
        <login v-else />
    </div>
</template>

<script>

import AppAlert from 'ptgmp/components/utils/Alert.vue';
import AlertContainer from 'ptgmp/components/utils/AlertContainer.vue';
import Login from 'ptgmp/routes/Login.vue';
import Home from 'ptgmp/routes/Home.vue';

export default {

    components: {
        AlertContainer,
        AppAlert,
        Login,
        Home
    },

    // mounted() {
    //     let { dispatch } = this.$store;
    //     dispatch('alert/info', 'hello');
    //     // dispatch('alert/delayedClear', 2000);
    // },

    computed: {
        loggedIn() {
            let { id } = this.$store.state.user;
            return id > 0 || false;
        }
    }

}
</script>
