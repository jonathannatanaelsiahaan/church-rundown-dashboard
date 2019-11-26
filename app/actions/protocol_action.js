import Action from "actions/action";

const CREATE_PROTOCOL = "CREATE_PROTOCOL";
const UPDATE_PROTOCOL = "UPDATE_PROTOCOL";
const DESTROY_PROTOCOL = "DESTROY_PROTOCOL";

class ProtocolAction {
  static create(protocol, table, elements) {
    return {
      type: CREATE_PROTOCOL,
      table,
      [table]: Action.buildKeyValueList(protocol, elements)
    };
  }

  static update(protocol, table, elements) {
    return {
      type: UPDATE_PROTOCOL,
      table,
      [table]: Action.buildKeyValueList(protocol, elements)
    };
  }

  static destroy(protocol, table, elements) {
    return {
      type: DESTROY_PROTOCOL,
      table,
      [table]: Action.buildKeyValueList(protocol, elements)
    };
  }
}

export default ProtocolAction;
export { CREATE_PROTOCOL, UPDATE_PROTOCOL, DESTROY_PROTOCOL };
