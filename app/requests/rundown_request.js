class RundownRequest {
    static getByOrganizerId(organizerId, response){
        fetch(API_URL + '/public/rundown/' + organizerId, {
            method: 'get'
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            response(data)
        })
    }

    static getByOrganizerIdAndDate(organizerId, startDate, endDate, response) {
        fetch(API_URL + '/public/rundown/' + organizerId + '?startDate=' + startDate + '&endDate=' + endDate, {
            method: 'get'
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            response(data)
        })
    }

    static update(rundown, callback) {
        fetch(API_URL + '/admin/rundown', {
            method: 'put',
            headers: new Headers({
                'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('data')).token
            }),
            body: JSON.stringify(rundown)
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

    static create(rundown, callback) {
        fetch(API_URL + '/admin/rundown', {
            method: 'post',
            headers: new Headers({
                'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('data')).token
            }),
            body: JSON.stringify(rundown)
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

    static delete(rundownId, callback) {
        fetch(API_URL + '/admin/rundown/' + rundownId, {
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

export default RundownRequest;