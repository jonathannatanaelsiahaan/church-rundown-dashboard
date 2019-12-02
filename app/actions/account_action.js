import ProtocolAction from "actions/protocol_action";
import RundownProtocol from "protocols/rundown_protocol";

class RundownAction {
  static create(elements) {
    return ProtocolAction.create(RundownProtocol, "rundowns", elements);
  }

  static update(elements) {
    return ProtocolAction.update(RundownProtocol, "rundowns", elements);
  }

  static destroy(elements) {
    return ProtocolAction.destroy(RundownProtocol, "rundowns", elements);
  }
}

export default RundownAction;