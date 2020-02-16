import { combineReducers } from "redux";

import ProtocolReducer from "reducers/protocol_reducer";

class Reducer {
  static combine(reducers) {
    return combineReducers(reducers);
  }

  static root(state, action) {
    return Reducer.all(state, action);
  }

  static all = Reducer.combine({
    rundowns: ProtocolReducer.build("rundowns"),
    rundownItems: ProtocolReducer.build("rundownItems"),
    accounts: ProtocolReducer.build("accounts"),
    users: ProtocolReducer.build("users"),
    organizers: ProtocolReducer.build("organizers"),
    concregations: ProtocolReducer.build("concregations"),
    deviceInventorys: ProtocolReducer.build("deviceInventorys"),
    serviceSchedules: ProtocolReducer.build("serviceSchedules"),
    sectorCoordinators: ProtocolReducer.build("sectorCoordinators")
  });

}

export default Reducer;