const path = require('path');
const { defineConfig } = require('@vue/cli-service');


module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
      port: 3200,
        allowedHosts: 'all'
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('ptgmp', path.resolve(__dirname, 'src/ptgmp-client'));

        // console.log({ config });
        config.entryPoints.delete('app');
        config.entry('app').add('./src/ptgmp-client/app.js').end().end();
    },
})