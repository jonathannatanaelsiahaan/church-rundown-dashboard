import React from "react"
import RegisterUser from "components/register_user"
import RegisterOrganization from "components/register_organization"
import AuthUsecase from "usecase/auth_usecase";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            phase: "Organization",
            data: {
                organizer: {},
                account: {},
                user: {}
            }, 
            showNotification: false
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
        authUsecase.register(authData, (errorMessage) => {
            if(errorMessage != null) {
                this.handleOpenNotification(errorMessage)
            }
        });
    }

    handleCloseNotification() {
        this.setState({
            showNotification: false
        })
    }

    handleOpenNotification(notificationMessage) {
        this.setState({
            showNotification: true,
            notificationMessage: notificationMessage
        })
    }

    render() {
        var registerMenu = <RegisterUser onClickListener={this.onClickOnPhase2.bind(this)} />;
        if(this.state.phase == "Organization") {
            registerMenu = <RegisterOrganization onClickListener={this.onClickOnPhase1.bind(this)} />;
        }

        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'top',
                    }}
                    open={this.state.showNotification}
                    autoHideDuration={6000}
                    onClose={this.handleCloseNotification.bind(this)}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.state.notificationMessage}</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="close"
                            color="inherit"
                            onClick={this.handleCloseNotification.bind(this)}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
                { registerMenu }
            </div>
        )
    }
}

export default Register;