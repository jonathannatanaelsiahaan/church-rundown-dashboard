import { createStore, applyMiddleware, compose } from "redux";
import Reducer from "reducers/reducer";

let _store;

const _none = {};

class Store {
  static create() {
    return createStore(
      Reducer.root,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }

  static set store(value) {
    _store = value;
  }

  static get store() {
    return _store;
  }

  static getState() {
    return typeof _store !== "undefined" ? _store.getState() : _none;
  }

  static dispatch(action) {
    if (typeof _store !== "undefined") {
      _store.dispatch(action);
    }
  }
}

export default Store;
