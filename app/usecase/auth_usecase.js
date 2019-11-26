import AuthRequest from "requests/auth_request"

class AuthUsecase {
    register(auth){
        AuthRequest.register(auth, (response) => {
            sessionStorage.setItem('data', JSON.stringify(response))
            window.location.replace("/dashboard");
        });
    }

    login(auth) {
        AuthRequest.login(auth, (response) => {
            sessionStorage.setItem('data', JSON.stringify(response))
            window.location.replace("/dashboard");
        });
    }
}

export default AuthUsecase;