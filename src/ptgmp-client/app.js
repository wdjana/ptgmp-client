import 'bootstrap/scss/bootstrap.scss';
import 'ptgmp/scss/bootstrap.scss';

import Vue from 'vue';
import App from './App.vue';

import store from './store';
// import router from './router';

function startApp() {
    return new Vue({
        el: '#app',
        store,
        // router,
        render: h => h(App)
    });
}

startApp();


// import { createApp } from 'vue';
// import App from './App.vue';

// import 'leaflet/dist/leaflet.css';
// import './css/main.css';
// import { map, control } from 'leaflet';
// import profider from './components/leafletmap/provider';

// import 'bootstrap/scss/bootstrap.scss';
// import 'ptgmp/scss/bootstrap.scss';
//
// import service from './service';
// import config from './config';
//
// import Vue from 'vue';
// import App from './App.vue';
//
// import store from './store';
// import router from './router';
//
//
//
//
// function startApp() {
//     return new Vue({
//         el: '#app',
//         store,
//         router,
//         render: h => h(App)
//     });
// }
//
// if (api) {
//     service.init(api, config)
//         .then(result => {
//             if (result) {
//                 startApp();
//             }
//         });
// } else {
//     console.log('nothing');
// }


/*

*/

// import 'leaflet/dist/leaflet.css';
// import './css/main.css';
// import { map } from 'leaflet';
// import profider from './components/leafletmap/provider';
// const cmap = map('app', { center: [ -2, 115], zoom: 4 });
// profider('Esri.WorldImagery').addTo(cmap);

// control.layers({},{},{collapsed: false}).addTo(cmap);
