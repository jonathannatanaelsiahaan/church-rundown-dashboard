import AuthRequest from "requests/auth_request"
import UserAction from "actions/user_action";
import AccountAction from "actions/account_action";
import Store from "stores/store";

class AuthUsecase {
    register(auth){
        AuthRequest.register(auth, (response) => {
            if(response.status == 200) {
                const data = JSON.parse(response.data);
                const account = data.account;
                const user = data.user;
                const organizer = data.organizer;
                const token = data.token;

                const storedSession = {
                    organizer: organizer,
                    token: token
                }

                sessionStorage.setItem('data', JSON.stringify(storedSession))

                const createUserAction = UserAction.create([user]);
                const createAccountAction = AccountAction.create([account]);
                Store.dispatch(createUserAction);
                Store.dispatch(createAccountAction);

                window.location.replace("/dashboard");
            }
        });
    }

    login(auth) {
        AuthRequest.login(auth, (response) => {
            if(response.status == 200) {
                const data = JSON.parse(response.data);
                const account = data.account;
                const user = data.user;
                const organizer = data.organizer;
                const token = data.token;

                const storedSession = {
                    organizer: organizer,
                    token: token
                }

                sessionStorage.setItem('data', JSON.stringify(storedSession))

                const createUserAction = UserAction.create([user]);
                const createAccountAction = AccountAction.create([account]);
                Store.dispatch(createUserAction);
                Store.dispatch(createAccountAction);

                window.location.replace("/dashboard");
            }
        });
    }

    static logout() {
        sessionStorage.removeItem('data');

        window.location.replace("/login");
    }
}

export default AuthUsecase;