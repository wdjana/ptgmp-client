<template lang="html">
<div class="alert" :class="alert.type">
    <button v-if="alert.close"
        @click="$store.dispatch('alert/clear')"
        class="close"><span aria-hidden="true">&times;</span></button>

    <span v-html="alert.message"></span>
    <hr v-if="itemCount > 0">
    <ul v-if="itemCount > 0" class="list-group- my-3">
        <li v-for="(item, index) in alert.items" :key="index"
            class="list-group-item" v-html="item">
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'AppAlert',

    computed: {
        alert() {
            let { alert } = this.$store.state;
            return alert;
        },

        itemCount() {
            let { items } = this.alert;
            return items.length;
        },

        listType() {
            let { type } = this.alert;
            if (type) {
                type = type.split('-').pop();
                return `list-group-item-${type}`;
            } else {
                return '';
            }
        }
    }
}
</script>
