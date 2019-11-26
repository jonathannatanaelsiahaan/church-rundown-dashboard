import React from "react"
import RegisterUser from "components/register_user"
import RegisterOrganization from "components/register_organization"
import AuthUsecase from "usecase/auth_usecase";

class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            phase: "Organization",
            data: {
                organizer: {},
                account: {},
                user: {}
            }
        }

        this.data = {}
    }
    
    onClickOnPhase1(data) {
        this.setState({
            phase: "User",
            data: {
                organizer: data.organizer
            }
        })
    }

    onClickOnPhase2(data) {
        const authData = {
            organizer: this.state.data.organizer,
            user: data.user,
            account: data.account
        }

        const authUsecase = new AuthUsecase();
        authUsecase.register(authData);
    }

    render() {
        if(this.state.phase == "Organization") {
            return (
                <RegisterOrganization onClickListener={this.onClickOnPhase1.bind(this)} />
            )
        } else {
            return (
                <RegisterUser onClickListener={this.onClickOnPhase2.bind(this)} />
            )
        }
    }
}

export default Register;