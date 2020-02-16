class ServiceScheduleRequest {
    static getByOrganizerId(organizerId, response){
        fetch(API_URL + '/admin/service_schedule/' + organizerId, {
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

    static update(serviceSchedule, callback) {
        fetch(API_URL + '/admin/service_schedule', {
            method: 'put',
            headers: new Headers({
                'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('data')).token
            }),
            body: JSON.stringify(serviceSchedule)
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

    static create(serviceSchedule, callback) {
        fetch(API_URL + '/admin/service_schedule', {
            method: 'post',
            headers: new Headers({
                'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('data')).token
            }),
            body: JSON.stringify(serviceSchedule)
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

    static destroy(serviceScheduleId, callback) {
        fetch(API_URL + '/admin/service_schedule/' + serviceScheduleId, {
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

export default ServiceScheduleRequest;