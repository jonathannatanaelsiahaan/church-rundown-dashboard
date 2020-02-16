import SectorCoordinatorRequest from "requests/sector_coordinator_request"
import Store from "stores/store";
import SectorCoordinatorAction from "actions/sector_coordinator_action"

class SectorCoordinatorUsecase {
    static create(sectorCoordinatorData) {
        SectorCoordinatorRequest.create(sectorCoordinatorData, (result) => {
            if(result.status == 200) {
                const sectorCoordinator = JSON.parse(result.data)
                const createSectorCoordinatorAction = SectorCoordinatorAction.create([sectorCoordinator])
                Store.dispatch(createSectorCoordinatorAction)
            } else if(result.status == 401) {
                
            }
        })
    }

    static update(sectorCoordinatorData) {
        SectorCoordinatorRequest.update(sectorCoordinatorData, (result) => {
            if(result.status == 200) {
                const sectorCoordinator = JSON.parse(result.data)
                const updateSectorCoordinatorAction = SectorCoordinatorAction.update([sectorCoordinator])
                Store.dispatch(updateSectorCoordinatorAction)
            } else if(result.status == 401) {
                
            }
        })
    }

    static fetchAll() {
        const organizerId = JSON.parse(localStorage.getItem('data')).organizer.ID
        SectorCoordinatorRequest.getByOrganizerId(organizerId, result => {
            if(result.status == 200) {
                const sectorCoordinator = JSON.parse(result.data)
                const createSectorCoordinatorAction = SectorCoordinatorAction.create(sectorCoordinator)
                Store.dispatch(createSectorCoordinatorAction)
            }
        })
    }

    static delete(sectorCoordinator) {
        SectorCoordinatorRequest.destroy(sectorCoordinator.ID, result => {
            if(result.status == 200) {
                const removeSectorCoordinatorAction = SectorCoordinatorAction.destroy([sectorCoordinator])
                Store.dispatch(removeSectorCoordinatorAction)
            } else if(result.status == 401) {
                
            }
        })
    }
}

export default SectorCoordinatorUsecase;