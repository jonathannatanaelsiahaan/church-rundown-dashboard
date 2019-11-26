class AuthRequest {
    static register(auth, result){
        fetch('http://localhost:3000/public/auth/register', {
            method: 'post',
            body: JSON.stringify(auth)
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            result(data)
        })
    }

    static login(auth, result) {
        fetch('http://localhost:3000/public/auth/login', {
            method: 'post',
            body: JSON.stringify(auth)
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            result(data)
        })
    }
}

export default AuthRequest;