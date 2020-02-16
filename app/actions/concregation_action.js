import ProtocolAction from "actions/protocol_action";
import ConcregationProtocol from "protocols/concregation_protocol";

class ConcregationAction {
  static create(elements) {
    return ProtocolAction.create(ConcregationProtocol, "concregations", elements);
  }

  static update(elements) {
    return ProtocolAction.update(ConcregationProtocol, "concregations", elements);
  }

  static destroy(elements) {
    return ProtocolAction.destroy(ConcregationProtocol, "concregations", elements);
  }
}

export default ConcregationAction;