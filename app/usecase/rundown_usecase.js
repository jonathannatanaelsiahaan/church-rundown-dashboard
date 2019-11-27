import RundownRequest from "requests/rundown_request"
import Store from "stores/store";
import RundownAction from "actions/rundown_action"

class RundownUsecase {
    static create(rundownData) {
        RundownRequest.create(rundownData, (result) => {
            if(result.status == 200) {
                const rundown = JSON.parse(result.data)
                const createRundownAction = RundownAction.create([rundown])
                Store.dispatch(createRundownAction)
            }
        })
    }

    static update(rundownData) {
        RundownRequest.update(rundownData, (result) => {
            if(result.status == 200) {
                const rundown = JSON.parse(result.data)
                const updateRundownAction = RundownAction.update([rundown])
                Store.dispatch(updateRundownAction)
            }
        })
    }

    static fetchAll() {
        const organizerId = JSON.parse(sessionStorage.getItem('data')).organizer.ID
        RundownRequest.getByOrganizerId(organizerId, result => {
            if(result.status == 200) {
                const rundown = JSON.parse(result.data)
                const createRundownAction = RundownAction.create(rundown)
                Store.dispatch(createRundownAction)
            }
        })
    }

    static delete(rundown) {
        RundownRequest.delete(rundown.ID, result => {
            if(result.status == 200) {
                const removeRundownAction = RundownAction.destroy([rundown])
                Store.dispatch(removeRundownAction)
            }
        })
    }
}

export default RundownUsecase;