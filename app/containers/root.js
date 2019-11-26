import React from "react";
import { Provider } from "react-redux";
import Store from "stores/store";

import Main from "components/main";
import "containers/root.css";

export default class Root extends React.Component {
  constructor() {
    super();

    Store.store = Store.create();

    global.store = this._store;
  }

  get store() {
    return this._store;
  }

  render() {
    return (
      <Provider store={ Store.store }>
        <Main />
      </Provider>
    );
  }
}