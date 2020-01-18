import React from "react"
import style from "components/css/login.css"
import AuthUsecase from "usecase/auth_usecase"
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showNotification: false,
            notificationMessage: ""
        }
    }

    onClickHandler(event) {
        event.preventDefault();
        
        const accountUsernameDom = document.querySelector("#username")
        const accountPasswordDom = document.querySelector("#password")

        const authData = {
            username: accountUsernameDom.value,
            password: accountPasswordDom.value
        }

        const authUsecase = new AuthUsecase()
        authUsecase.login(authData, (errorMessage) => {
            if(errorMessage != null) {
                this.handleOpenNotification(errorMessage);
            }
        })
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
        return (
            <div className={style.container}>
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
                <div className={style.session}>
                    <div className={style.left}>     
                    </div>
                    <form action="" className={style.logIn} autocomplete="off"> 
                    <h4>Acara Gereja Dashboard</h4>
                    <p>Welcome back! Log in to your account to create your own rundown</p>
                    <div className={style.floatingLabel}>
                        <input placeholder="Username" type="text" name="username" id="username" autocomplete="off"/>
                        <div className={style.icon}>
                        </div>
                    </div>
                    <div className={style.floatingLabel}>
                        <input placeholder="Password" type="password" name="password" id="password" autocomplete="off"/>
                        <div className={style.icon}>
                        </div>
                    </div>
                    <button type="submit" onClick={this.onClickHandler.bind(this)} className={style.login}>Log in</button>
                    <p>No have account?</p>
                    <p>Create your account for free</p><br/>
                    <p><a href="/register" className={style.register}>Register</a></p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;