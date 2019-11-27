import RundownItemRequest from "requests/rundown_item_request"
import Store from "stores/store";
import RundownItemAction from "actions/rundown_item_action"

class RundownItemUsecase {
    static create(rundownItemData) {
        RundownItemRequest.create(rundownItemData, (result) => {
            if(result.status == 200) {
                const rundownItem = JSON.parse(result.data)
                const createRundownItemAction = RundownItemAction.create([rundownItem])
                Store.dispatch(createRundownItemAction)
            }
        })
    }

    static update(rundownItemData) {
        RundownItemRequest.update(rundownItemData, (result) => {
            if(result.status == 200) {
                const rundownItem = JSON.parse(result.data)
                const updateRundownItemAction = RundownItemAction.update([rundownItem])
                Store.dispatch(updateRundownItemAction)
            }
        })
    }

    static fetchAll(rundownId) {
        RundownItemRequest.getByRundownId(rundownId, result => {
            if(result.status == 200) {
                const rundownItem = JSON.parse(result.data)
                const createRundownItemAction = RundownItemAction.create(rundownItem)
                Store.dispatch(createRundownItemAction)
            }
        })
    }

    static delete(rundownItem) {
        RundownItemRequest.delete(rundownItem.ID, result => {
            if(result.status == 200) {
                const removeRundownItemAction = RundownItemAction.destroy([rundownItem])
                Store.dispatch(removeRundownItemAction)
            }
        })
    }
}

export default RundownItemUsecase;