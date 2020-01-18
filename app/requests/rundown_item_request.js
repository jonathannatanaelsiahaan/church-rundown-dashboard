class RundownItemRequest {
    static getByRundownId(rundownId, response){
        fetch('{$API_URL}/public/rundown_item/' + rundownId, {
            method: 'get'
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            response(data)
        })
    }

    static update(rundownItem, callback) {
        fetch(API_URL + '/admin/rundown_item', {
            method: 'put',
            headers: new Headers({
                'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('data')).token
            }),
            body: JSON.stringify(rundownItem)
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

    static create(rundownItem, callback) {
        fetch(API_URL + '/admin/rundown_item', {
            method: 'post',
            headers: new Headers({
                'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('data')).token
            }),
            body: JSON.stringify(rundownItem)
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

    static delete(rundownItemId, callback) {
        fetch(API_URL + '/admin/rundown_item/' + rundownItemId, {
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

export default RundownItemRequest;