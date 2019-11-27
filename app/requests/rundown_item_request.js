class RundownItemRequest {
    static getByRundownId(rundownId, response){
        fetch('http://localhost:3000/public/rundown_item/' + rundownId, {
            method: 'get'
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            response(data)
        })
    }

    static update(rundownItem, response) {
        fetch('http://localhost:3000/admin/rundown_item', {
            method: 'put',
            headers: new Headers({
                'Authorization': 'Bearer '+ JSON.parse(sessionStorage.getItem('data')).token
            }),
            body: JSON.stringify(rundownItem)
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            response(data)
        })
    }

    static create(rundownItem, response) {
        fetch('http://localhost:3000/admin/rundown_item', {
            method: 'post',
            headers: new Headers({
                'Authorization': 'Bearer '+ JSON.parse(sessionStorage.getItem('data')).token
            }),
            body: JSON.stringify(rundownItem)
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            response(data)
        })
    }

    static delete(rundownItemId, response) {
        fetch('http://localhost:3000/admin/rundown_item/' + rundownItemId, {
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

export default RundownItemRequest;