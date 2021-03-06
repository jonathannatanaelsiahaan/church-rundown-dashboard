class AccountRequest {
    static getById(id, response){
        fetch(API_URL + '/admin/account/' + id, {
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

export default AccountRequest;