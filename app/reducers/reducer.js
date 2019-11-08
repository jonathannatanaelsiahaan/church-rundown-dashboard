import { combineReducers } from "redux";

import UserReducer from "./user_reducer";

class Reducer {
  static all() {
    return combineReducers({
      users: UserReducer.reduce,
    });
  }
}

export default Reducer;