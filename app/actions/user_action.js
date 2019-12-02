import ProtocolAction from "actions/protocol_action";
import UserProtocol from "protocols/user_protocol";

class UserAction {
  static create(elements) {
    return ProtocolAction.create(UserProtocol, "users", elements);
  }

  static update(elements) {
    return ProtocolAction.update(UserProtocol, "users", elements);
  }

  static destroy(elements) {
    return ProtocolAction.destroy(UserProtocol, "users", elements);
  }
}

export default UserAction;