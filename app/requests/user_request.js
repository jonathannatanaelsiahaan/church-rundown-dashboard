class UserRequest {
    static getById(id, response){
        fetch('http://localhost:3000/admin/user/' + id, {
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
}

export default UserRequest;