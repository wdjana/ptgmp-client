import shp from 'shpjs';

// let testurl = 'http://devoc'

let fileurl = 'http://devode:3200/congress.zip';
console.log({ fileurl });

shp(fileurl).then(function(geojson){
    console.log({ fileurl, geojson });
});


export default {};
