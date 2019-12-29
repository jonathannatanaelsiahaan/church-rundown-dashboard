class AccountRequest {
    static getById(id, response){
        fetch('http://localhost:3000/admin/account/' + id, {
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

    static update(account, response){
        fetch('http://localhost:3000/admin/account?id=' + account.id, {
            method: 'put',
            body: JSON.stringify(account)
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            response(data)
        })
    }
}

export default AccountRequest;