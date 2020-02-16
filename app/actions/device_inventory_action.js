import ProtocolAction from "actions/protocol_action";
import DeviceInventoryProtocol from "protocols/device_inventory_protocol";

class DeviceInventoryAction {
  static create(elements) {
    return ProtocolAction.create(DeviceInventoryProtocol, "deviceInventorys", elements);
  }

  static update(elements) {
    return ProtocolAction.update(DeviceInventoryProtocol, "deviceInventorys", elements);
  }

  static destroy(elements) {
    return ProtocolAction.destroy(DeviceInventoryProtocol, "deviceInventorys", elements);
  }
}

export default DeviceInventoryAction;