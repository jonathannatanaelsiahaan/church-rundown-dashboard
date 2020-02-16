class DeviceInventoryRequest {
    static getByOrganizerId(organizerId, response){
        fetch(API_URL + '/admin/device_inventory/' + organizerId, {
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

    static update(deviceInventory, callback) {
        fetch(API_URL + '/admin/device_inventory', {
            method: 'put',
            headers: new Headers({
                'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('data')).token
            }),
            body: JSON.stringify(deviceInventory)
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

    static create(deviceInventory, callback) {
        fetch(API_URL + '/admin/device_inventory', {
            method: 'post',
            headers: new Headers({
                'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('data')).token
            }),
            body: JSON.stringify(deviceInventory)
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

    static destroy(deviceInventoryId, callback) {
        fetch(API_URL + '/admin/device_inventory/' + deviceInventoryId, {
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

export default DeviceInventoryRequest;