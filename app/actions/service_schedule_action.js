import ProtocolAction from "actions/protocol_action";
import ServiceScheduleProtocol from "protocols/service_schedule_protocol";

class ServiceScheduleAction {
  static create(elements) {
    return ProtocolAction.create(ServiceScheduleProtocol, "serviceSchedules", elements);
  }

  static update(elements) {
    return ProtocolAction.update(ServiceScheduleProtocol, "serviceSchedules", elements);
  }

  static destroy(elements) {
    return ProtocolAction.destroy(ServiceScheduleProtocol, "serviceSchedules", elements);
  }
}

export default ServiceScheduleAction;