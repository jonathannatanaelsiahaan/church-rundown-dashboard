import React from "react"
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class DeleteForm extends React.Component {
    handleClose() {
        this.props.hide();
    }

    handleDelete() {
        this.props.delete();
        this.props.hide();
    }

    render() {
        const textDialog = "Are you sure want to delete " + this.props.itemName + " ?"
        return(
            <div>
                <DialogTitle id="alert-dialog-title">{textDialog}</DialogTitle>
                <DialogContent>
                </DialogContent>
                <DialogActions>
                <Button onClick={this.handleDelete.bind(this)} color="primary">
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

export default DeleteForm;