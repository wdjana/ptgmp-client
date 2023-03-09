<template lang="html">
    <div class="container-main">
        <l-map />
    </div>
</template>

<script>

import LMap from 'ptgmp/components/leafletmap/LMap.vue';

export default {

    components: {
        LMap
    }

}
</script>


<style media="screen" lang="scss">
html,body, .container-main {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}


</style>
