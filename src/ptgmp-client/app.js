/*global api*/
/*esling no-undef: "api"*/

// import { createApp } from 'vue';
// import App from './App.vue';

import 'leaflet/dist/leaflet.css';
import './css/main.css';
import { map, control } from 'leaflet';
import profider from './components/leafletmap/provider';

import service from './service';
import config from './config';



function startApp() {
    const cmap = map('app', { center: [ -2, 115], zoom: 4 });
    profider('Esri.WorldImagery').addTo(cmap);

    control.layers({},{},{collapsed: false}).addTo(cmap);
}

if (api) {
    service.init(api, config)
        .then(result => {
            if (result) {
                startApp();
            }
        });
} else {
    console.log('nothing');
}
