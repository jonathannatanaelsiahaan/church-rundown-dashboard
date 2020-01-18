let path , webpackResolve;

path = require('path');
webpackResolve = {
  enforceExtension: false,
  alias: {
      app: path.resolve(__dirname, "app/"),
      actions: path.resolve(__dirname, "app/actions/"),
      components: path.resolve(__dirname, "app/components/"),
      containers: path.resolve(__dirname, "app/containers/"),
      reducers: path.resolve(__dirname, "app/reducers/"),
      stores: path.resolve(__dirname, "app/stores"),
      usecase: path.resolve(__dirname, "app/usecase"),
      requests: path.resolve(__dirname, "app/requests"),
      protocols: path.resolve(__dirname, "app/protocols"),
      utils: path.resolve(__dirname, "app/utils")
  }
};

module.exports = webpackResolve;