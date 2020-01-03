import AuthRequest from "requests/auth_request"
import UserAction from "actions/user_action";
import AccountAction from "actions/account_action";
import Store from "stores/store";

class AuthUsecase {
    register(auth, callback){
        AuthRequest.register(auth, (response) => {
            if(response.status == 200) {
                const data = JSON.parse(response.data);
                const account = data.account;
                const user = data.user;
                const organizer = data.organizer;
                const token = data.token;

                const storedSession = {
                    organizer: {
                        ID: organizer.ID
                    },
                    token: token,
                    account: {
                        id: account.ID
                    },
                    user: {
                        id: user.ID
                    }
                }

                localStorage.setItem('data', JSON.stringify(storedSession))

                const createUserAction = UserAction.create([user]);
                const createAccountAction = AccountAction.create([account]);
                Store.dispatch(createUserAction);
                Store.dispatch(createAccountAction);

                window.location.replace("/dashboard");
            } else {
                var errorMessage = response.errorMessage;

                if(errorMessage.includes("Duplicate entry") && errorMessage.includes("username")) {
                    errorMessage = "Sorry, the username you choose is already taken";
                } else if(errorMessage.includes("Duplicate entry") && errorMessage.includes("name")) {
                    errorMessage = "Sorry, the organization name you choose is already taken";
                }

                callback(errorMessage);
            }
        });
    }

    login(auth, callback) {
        AuthRequest.login(auth, (response) => {
            if(response.status == 200) {
                const data = JSON.parse(response.data);
                const account = data.account;
                const user = data.user;
                const organizer = data.organizer;
                const token = data.token;

                const storedSession = {
                    organizer: {
                        ID: organizer.ID
                    },
                    token: token,
                    account: {
                        id: account.ID
                    },
                    user: {
                        id: user.ID
                    }
                }

                localStorage.setItem('data', JSON.stringify(storedSession))

                const createUserAction = UserAction.create([user]);
                const createAccountAction = AccountAction.create([account]);
                Store.dispatch(createUserAction);
                Store.dispatch(createAccountAction);

                window.location.replace("/dashboard");
            } else {
                var errorMessage = response.errorMessage;

                callback(errorMessage);
            }
        });
    }

    static logout() {
        localStorage.removeItem('data');

        window.location.replace("/login");
    }
}

export default AuthUsecase;