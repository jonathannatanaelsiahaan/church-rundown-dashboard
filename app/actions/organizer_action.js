import ProtocolAction from "actions/protocol_action";
import OrganizerProtocol from "protocols/organizer_protocol";

class OrganizerAction {
  static create(elements) {
    return ProtocolAction.create(OrganizerProtocol, "organizers", elements);
  }

  static update(elements) {
    return ProtocolAction.update(OrganizerProtocol, "organizers", elements);
  }

  static destroy(elements) {
    return ProtocolAction.destroy(OrganizerProtocol, "organizers", elements);
  }
}

export default OrganizerAction;