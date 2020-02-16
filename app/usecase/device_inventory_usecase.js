import DeviceInventoryRequest from "requests/device_inventory_request"
import Store from "stores/store";
import DeviceInventoryAction from "actions/device_inventory_action"

class DeviceInventoryUsecase {
    static create(deviceInventoryData) {
        DeviceInventoryRequest.create(deviceInventoryData, (result) => {
            if(result.status == 200) {
                const deviceInventory = JSON.parse(result.data)
                const createDeviceInventoryAction = DeviceInventoryAction.create([deviceInventory])
                Store.dispatch(createDeviceInventoryAction)
            } else if(result.status == 401) {
                
            }
        })
    }

    static update(deviceInventoryData) {
        DeviceInventoryRequest.update(deviceInventoryData, (result) => {
            if(result.status == 200) {
                const deviceInventory = JSON.parse(result.data)
                const updateDeviceInventoryAction = DeviceInventoryAction.update([deviceInventory])
                Store.dispatch(updateDeviceInventoryAction)
            } else if(result.status == 401) {
                
            }
        })
    }

    static fetchAll() {
        const deviceInventoryId = JSON.parse(localStorage.getItem('data')).organizer.ID
        DeviceInventoryRequest.getByOrganizerId(deviceInventoryId, result => {
            if(result.status == 200) {
                const deviceInventory = JSON.parse(result.data)
                const createDeviceInventoryAction = DeviceInventoryAction.create(deviceInventory)
                Store.dispatch(createDeviceInventoryAction)
            }
        })
    }

    static delete(deviceInventory) {
        DeviceInventoryRequest.destroy(deviceInventory.ID, result => {
            if(result.status == 200) {
                const removeDeviceInventoryAction = DeviceInventoryAction.destroy([deviceInventory])
                Store.dispatch(removeDeviceInventoryAction)
            } else if(result.status == 401) {
                
            }
        })
    }
}

export default DeviceInventoryUsecase;