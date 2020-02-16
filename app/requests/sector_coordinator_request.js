class SectorCoordinatorRequest {
    static getByOrganizerId(organizerId, response){
        fetch(API_URL + '/admin/sector_coordinator/' + organizerId, {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('data')).token
            }),
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            response(data)
        })
    }

    static update(sectorCoordinator, callback) {
        fetch(API_URL + '/admin/sector_coordinator', {
            method: 'put',
            headers: new Headers({
                'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('data')).token
            }),
            body: JSON.stringify(sectorCoordinator)
        }).then(function(response) {
            if(response.status == 200) {
                const jsonResponse = response.json();
                return jsonResponse.then(data => {
                    callback(data);
                });
            } else {
                callback({ status: response.status });
            } 
        })
    }

    static create(sectorCoordinator, callback) {
        fetch(API_URL + '/admin/sector_coordinator', {
            method: 'post',
            headers: new Headers({
                'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('data')).token
            }),
            body: JSON.stringify(sectorCoordinator)
        }).then(function(response) {
            if(response.status == 200) {
                const jsonResponse = response.json();
                return jsonResponse.then(data => {
                    callback(data);
                });
            } else {
                callback({ status: response.status });
            } 
        })
    }X

    static destroy(sectorCoordinatorId, callback) {
        fetch(API_URL + '/admin/sector_coordinator/' + sectorCoordinatorId, {
            method: 'delete',
            headers: new Headers({
                'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('data')).token
            }),
        }).then(function(response) {
            if(response.status == 200) {
                const jsonResponse = response.json();
                return jsonResponse.then(data => {
                    callback(data);
                });
            } else {
                callback({ status: response.status });
            } 
        })
    }
}

export default SectorCoordinatorRequest;