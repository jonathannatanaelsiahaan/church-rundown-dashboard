import ConcregationRequest from "requests/concregation_request"
import Store from "stores/store";
import ConcregationAction from "actions/concregation_action"

class ConcregationUsecase {
    static create(concregationData) {
        ConcregationRequest.create(concregationData, (result) => {
            if(result.status == 200) {
                const concregation = JSON.parse(result.data)
                const createConcregationAction = ConcregationAction.create([concregation])
                Store.dispatch(createConcregationAction)
            } else if(result.status == 401) {
                
            }
        })
    }

    static update(concregationData) {
        ConcregationRequest.update(concregationData, (result) => {
            if(result.status == 200) {
                const concregation = JSON.parse(result.data)
                const updateConcregationAction = ConcregationAction.update([concregation])
                Store.dispatch(updateConcregationAction)
            } else if(result.status == 401) {
                
            }
        })
    }

    static fetchAll() {
        const organizerId = JSON.parse(localStorage.getItem('data')).organizer.ID
        ConcregationRequest.getByOrganizerId(organizerId, result => {
            if(result.status == 200) {
                const concregation = JSON.parse(result.data)
                const createConcregationAction = ConcregationAction.create(concregation)
                Store.dispatch(createConcregationAction)
            }
        })
    }

    static delete(concregation) {
        ConcregationRequest.destroy(concregation.ID, result => {
            if(result.status == 200) {
                const removeConcregationAction = ConcregationAction.destroy([concregation])
                Store.dispatch(removeConcregationAction)
            } else if(result.status == 401) {
                
            }
        })
    }
}

export default ConcregationUsecase;