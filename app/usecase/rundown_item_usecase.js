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

    static fetchAll() {
    }

    static delete(rundownItem) {
    }
}

export default RundownItemUsecase;