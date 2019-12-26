import React from "react"
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import AuthUsecase from "usecase/auth_usecase";

class LogoutForm extends React.Component {
    handleClose() {
        this.props.hide();
    }

    handleLogout() {
        AuthUsecase.logout();
    }

    render() {
        return(
            <div>
                <DialogTitle id="alert-dialog-title">{"Are you sure want to logout?"}</DialogTitle>
                <DialogContent>
                </DialogContent>
                <DialogActions>
                <Button onClick={this.handleLogout.bind(this)} color="primary">
                    Yes
                </Button>
                <Button onClick={this.handleClose.bind(this)} color="primary" autoFocus>
                    No
                </Button>
                </DialogActions>
            </div>
        );
    }
}

export default LogoutForm;