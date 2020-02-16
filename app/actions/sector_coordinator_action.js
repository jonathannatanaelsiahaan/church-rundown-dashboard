import ProtocolAction from "actions/protocol_action";
import SectorCoordinatorProtocol from "protocols/sector_coordinator_protocol";

class SectorCoordinatorAction {
  static create(elements) {
    return ProtocolAction.create(SectorCoordinatorProtocol, "sectorCoordinators", elements);
  }

  static update(elements) {
    return ProtocolAction.update(SectorCoordinatorProtocol, "sectorCoordinators", elements);
  }

  static destroy(elements) {
    return ProtocolAction.destroy(SectorCoordinatorProtocol, "sectorCoordinators", elements);
  }
}

export default SectorCoordinatorAction;