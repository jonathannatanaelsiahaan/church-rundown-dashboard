import ProtocolAction from "actions/protocol_action";
import AccountProtocol from "protocols/account_protocol";

class AccountAction {
  static create(elements) {
    return ProtocolAction.create(AccountProtocol, "accounts", elements);
  }

  static update(elements) {
    return ProtocolAction.update(AccountProtocol, "accounts", elements);
  }

  static destroy(elements) {
    return ProtocolAction.destroy(AccountProtocol, "accounts", elements);
  }
}

export default AccountAction;