let path , webpackResolve;

path = require('path');
webpackResolve = (
  {
    alias: {
      app: path.resolve(__dirname, "public/"),
      actions: path.resolve(__dirname, "public/actions/"),
      components: path.resolve(__dirname, "public/component/"),
      containers: path.resolve(__dirname, "public/containers/"),
      reducers: path.resolve(__dirname, "public/reducers/"),
      stores: path.resolve(__dirname, "public/stores/"),
      protocols: path.resolve(__dirname, "public/protocols/")
    }
  }
);

module.exports = webpackResolve;