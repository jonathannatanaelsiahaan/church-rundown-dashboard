import { CREATE_PROTOCOL, UPDATE_PROTOCOL, DESTROY_PROTOCOL } from "actions/protocol_action";

class ProtocolReducer {
  static create(state, action = {}) {
    return {
      ...state,
      ...action[action.table]
    };
  }

  static update(state, action = {}) {
    const updatedState = {};
    const table = action[action.table];

    for (const key in table) {
      let exist = false;
      for (const i in state) {
        if (state[i].ID === table[key].ID) {
          exist = true;
          break;
        }
      }

      if (exist) {
        updatedState[key] = table[key]
      }
    }

    return {
      ...state,
      ...updatedState
    };
  }

  static destroy(state, action = {}) {
    const newState = { ...state };
    for (const primaryKey in action[action.table]) {
      delete newState[primaryKey];
    }

    return newState;
  }

  static reduce(state = {}, action = {}) {
    switch (action.type) {
      case CREATE_PROTOCOL:
        return ProtocolReducer.create(state, action);

      case UPDATE_PROTOCOL:
        return ProtocolReducer.update(state, action);

      case DESTROY_PROTOCOL:
        return ProtocolReducer.destroy(state, action);

      default:
        return state;
    }
  }

  static build(table) {
    return (state = {}, action = {}) =>
      action.table === table ? ProtocolReducer.reduce(state, action) : state;
  }
}

export default ProtocolReducer;
