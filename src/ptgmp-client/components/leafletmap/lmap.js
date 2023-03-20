import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import provider from './provider';
import shp from 'shpjs';

let mapInstance;
// let geo = new L.GeoJSON({ features: [] },
//     { style: {
//         fillColor: '#ad9929',
//         weight: 1,
//         opacity: 1,
//         color: '#f00',
//         fillOpacity: 1
//     }});
// let overlays = { geo };


function destroyMap() {
    if (mapInstance && mapInstance.remove) {
        mapInstance.off();
        mapInstance.remove();
    }
}

function createMap(id) {
    mapInstance = L.map(id, {center: [-2, 115], zoom: 4});
    provider('Esri.WorldImagery').addTo(mapInstance);
    // L.control.layers({}, overlays, { collapsed: false }).addTo(mapInstance);

    // console.log({ mapInstance });
}

export default {

    props: {
        tagId: {
            type: String,
            default: 'lmap',
        }
    },

    data() {
        return {
            file: null,
            fileKey: 0,
        };
    },

    mounted() {
        if (mapInstance) destroyMap();
        let { tagId } = this;
        createMap(tagId);
    },

    methods: {
        onFileChange(e){
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;

            this.file = files[0];
        },

        onAddFile() {
            let vm = this;
            let { file } = this;
            if (file) {
                let fileReader = new FileReader();

                fileReader.onload = function() {
                    let buffer = fileReader.result;
                    shp(buffer).then(data => {
                        let geojson = new L.GeoJSON({ features: [] },
                            { style: {
                                fillColor: '#ad9929',
                                weight: 2,
                                opacity: 1,
                                color: '#f00',
                                fillOpacity: 1
                            }});

                        // console.log({ data, geojson });

                        geojson.addData(data);
                        let layer = geojson.addTo(mapInstance);
                        mapInstance.flyToBounds(layer.getBounds(), { duration: 1 });

                        vm.file = null;
                        vm.fileKey++;



                        // let namea = file.name.split('.');
                        // namea.pop();
                        // let name = namea.join('_');
                        //
                        // console.log({ name, data });
                    });
                }

                fileReader.readAsArrayBuffer(file);
            }
        },

    }

};
