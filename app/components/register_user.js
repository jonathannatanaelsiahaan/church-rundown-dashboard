import React from "react"
import style from "components/css/register.css"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isPopupOpen: false,
            error: ""
        }
    }

    onClickHandler(event) {
        event.preventDefault();

        const userNameDom = document.querySelector("#name")
        const accountUsernameDom = document.querySelector("#username")
        const accountPasswordDom = document.querySelector("#password")

        const data = {
            user: {
                name: userNameDom.value
            },
            account: {
                username: accountUsernameDom.value,
                password: accountPasswordDom.value
            }
        }

        const isValid = this.validate();

        if(isValid) {
            this.props.onClickListener(data);
        }
    }

    validate() {
        const name = document.querySelector("#name")
        const username = document.querySelector("#username")
        const password = document.querySelector("#password")

        if(name.value == "") {
            this.setState({
                isPopupOpen: true,
                error: "Name cannot empty"
            })

            return false;
        }

        if(username.value == "") {
            this.setState({
                isPopupOpen: true,
                error: "Username cannot empty"
            })

            return false;
        }

        if(password.value == "") {
            this.setState({
                isPopupOpen: true,
                error: "Password cannot empty"
            })

            return false;
        }

        return true
    }

    handleClosePopup() {
        this.setState({
            isPopupOpen: false
        })
    }

    render() {
        const isPopupOpen = this.state.isPopupOpen;
        
        return (
            <div className={style.container}>
                <div className={style.session}>
                    <div className={style.left}>
                    </div>
                    <form action="" className={style.logIn} autocomplete="off"> 
                    <h4>Acara Gereja Dashboard</h4>
                    <p>For The Last Step, Please Fill Your Account Data</p>
                    <div className={style.floatingLabel}>
                        <input placeholder="Name" type="text" name="name" id="name" autocomplete="off" />
                        <div className={style.icon}>
                        </div>
                    </div>
                    <div className={style.floatingLabel}>
                        <input placeholder="Username" type="text" name="username" id="username" autocomplete="off" />
                        <div className={style.icon}>
                        </div>
                    </div>
                    <div className={style.floatingLabel}>
                        <input placeholder="Password" type="password" name="password" id="password" autocomplete="off" />
                        <div className={style.icon}>
                        </div>
                    </div>
                    <button type="submit" onClick={this.onClickHandler.bind(this)} className={style.login}>Finish</button>
                    </form>
                </div>

                <Dialog
                    open={isPopupOpen}
                    onClose={this.handleClosePopup.bind(this)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{this.state.error}</DialogTitle>
                        <DialogContent>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={this.handleClosePopup.bind(this)} color="primary">
                            Ok
                        </Button>
                        </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default Register;