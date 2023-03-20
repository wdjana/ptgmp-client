<template lang="html">
<div class="component-container">
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
.component-container.sidebar {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;

    width: 300px;
}


</style>
