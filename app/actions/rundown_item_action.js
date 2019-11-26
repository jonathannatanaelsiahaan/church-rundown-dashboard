import ProtocolAction from "actions/protocol_action";
import RundownItemProtocol from "protocols/rundown_item_protocol";

class RundownItemAction {
  static create(elements) {
    return ProtocolAction.create(RundownItemProtocol, "rundownItems", elements);
  }

  static update(elements) {
    return ProtocolAction.update(RundownItemProtocol, "rundownItems", elements);
  }

  static destroy(elements) {
    return ProtocolAction.destroy(RundownItemProtocol, "rundownItems", elements);
  }
}

export default RundownItemAction;