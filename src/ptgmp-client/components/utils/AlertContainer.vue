<template lang="html">
    <div class="alert-container">
        <slot></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style media="screen" lang="scss">

.alert-container {
    position: absolute;
    bottom: 5px;
    left: 5px;
    max-width: 300px;

    .alert {
        padding: 5px 10px;
        margin-bottom: 0;
    }
}

</style>
