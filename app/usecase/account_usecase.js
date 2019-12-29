import AccountRequest from "requests/account_request";
import UserRequest from "requests/user_request";
import OrganizerRequest from "requests/organizer_request";

import UserAction from "actions/user_action";
import OrganizerAction from "actions/organizer_action";
import AccountAction from "actions/account_action";

import Store from "stores/store";

class AccountUsecase {
    static fetchAll() {
        const accountId = JSON.parse(localStorage.getItem('data')).account.id
        AccountRequest.getById(accountId, result => {
            if(result.status == 200) {
                const account = JSON.parse(result.data)
                const createAccountAction = AccountAction.create([account])
                Store.dispatch(createAccountAction)
            }
        })

        const userId = JSON.parse(localStorage.getItem('data')).user.id;
        UserRequest.getById(userId, result => {
            if(result.status == 200) {
                const user = JSON.parse(result.data);
                const createUserAction = UserAction.create([user]);
                Store.dispatch(createUserAction);
            }
        })

        const organizerId = JSON.parse(localStorage.getItem('data')).organizer.ID;
        OrganizerRequest.getById(organizerId, result => {
            if(result.status == 200) {
                const organizer = JSON.parse(result.data);
                const createOrganizerAction = OrganizerAction.create([organizer]);
                Store.dispatch(createOrganizerAction);
            }
        })
    }
}

export default AccountUsecase;