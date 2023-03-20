<template lang="html">
    <div class="component-container">
        <div class="component-container content-container">
            <div :id="tagId" style="height: 100%;"></div>
        </div>
        <div class="component-container sidebar-container" >
            <div class="container-fluid pt-3">
                <p>
                    <strong>TEST SHP IMPORT</strong>
                </p>
                <div class="form-group">
                    <input type="file" @change="onFileChange" :key="fileKey">
                </div>
                <div v-if="file" class="form-group">
                    <button type="button"
                        @click="onAddFile"
                        class="btn btn-outline-secondary">Add to Map</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script type="text/javascript" src="./lmap.js"></script>
<style media="screen" lang="scss" src="./lmap.scss"></style>
