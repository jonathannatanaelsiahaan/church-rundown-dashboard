class RundownRequest {
    static getByOrganizerId(organizerId, response){
        fetch('http://localhost:3000/public/rundown/' + organizerId, {
            method: 'get'
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            response(data)
        })
    }

    static update(rundown, response) {
        fetch('http://localhost:3000/admin/rundown', {
            method: 'put',
            headers: new Headers({
                'Authorization': 'Bearer '+ JSON.parse(sessionStorage.getItem('data')).token
            }),
            body: JSON.stringify(rundown)
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            response(data)
        })
    }

    static create(rundown, response) {
        fetch('http://localhost:3000/admin/rundown', {
            method: 'post',
            headers: new Headers({
                'Authorization': 'Bearer '+ JSON.parse(sessionStorage.getItem('data')).token
            }),
            body: JSON.stringify(rundown)
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            response(data)
        })
    }

    static delete(rundownId, response) {
        fetch('http://localhost:3000/admin/rundown/' + rundownId, {
            method: 'delete',
            headers: new Headers({
                'Authorization': 'Bearer '+ JSON.parse(sessionStorage.getItem('data')).token
            }),
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            response(data)
        })
    }
}

export default RundownRequest;