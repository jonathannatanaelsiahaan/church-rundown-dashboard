class AccountRequest {
    static getById(account, response){
        fetch('http://localhost:3000/admin/account?id=' + account.id, {
            method: 'get'
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