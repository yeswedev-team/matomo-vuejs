/* eslint-disable no-param-reassign */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/app.scss'),
      ],
    });
}

module.exports = {
  outputDir: path.resolve(__dirname, './build'),
  chainWebpack: (config) => {
    // DevServer
    config.devServer.disableHostCheck(true);
    config.devServer.port(3000);
    config.devServer.watchOptions({
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 500,
    });

    // Styles resources
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => addStyleResource(config.module.rule('scss').oneOf(type)));
  },
  configureWebpack: {
    output: {
      hashFunction: 'sha256',
    },
  },
  filenameHashing: true,
  productionSourceMap: true,
};
