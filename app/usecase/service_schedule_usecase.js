import ServiceScheduleRequest from "requests/service_schedule_request"
import Store from "stores/store";
import ServiceScheduleAction from "actions/service_schedule_action"

class ServiceScheduleUsecase {
    static create(serviceScheduleData) {
        ServiceScheduleRequest.create(serviceScheduleData, (result) => {
            if(result.status == 200) {
                const serviceSchedule = JSON.parse(result.data)
                const createServiceScheduleAction = ServiceScheduleAction.create([serviceSchedule])
                Store.dispatch(createServiceScheduleAction)
            } else if(result.status == 401) {
                
            }
        })
    }

    static update(serviceScheduleData) {
        ServiceScheduleRequest.update(serviceScheduleData, (result) => {
            if(result.status == 200) {
                const serviceSchedule = JSON.parse(result.data)
                const updateServiceScheduleAction = ServiceScheduleAction.update([serviceSchedule])
                Store.dispatch(updateServiceScheduleAction)
            } else if(result.status == 401) {
                
            }
        })
    }

    static fetchAll() {
        const organizerId = JSON.parse(localStorage.getItem('data')).organizer.ID
        ServiceScheduleRequest.getByOrganizerId(organizerId, result => {
            if(result.status == 200) {
                const serviceSchedule = JSON.parse(result.data)
                const createServiceScheduleAction = ServiceScheduleAction.create(serviceSchedule)
                Store.dispatch(createServiceScheduleAction)
            }
        })
    }

    static delete(serviceSchedule) {
        ServiceScheduleRequest.destroy(serviceSchedule.ID, result => {
            if(result.status == 200) {
                const removeServiceScheduleAction = ServiceScheduleAction.destroy([serviceSchedule])
                Store.dispatch(removeServiceScheduleAction)
            } else if(result.status == 401) {
                
            }
        })
    }
}

export default ServiceScheduleUsecase;