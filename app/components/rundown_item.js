import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CreateIcon from '@material-ui/icons/Create';
import RundownItemForm from "components/rundown_item_form";
import RundownItemUsecase from "usecase/rundown_item_usecase";

import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DeleteForm from "components/delete_form";

class RundownItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showEditMenu: false
        }
    }

    handleClickOnRundownItem(e) {
        e.preventDefault();

        this.setState({
            showEditMenu: true
        });
    }

    hideForm() {
        this.setState({
            showEditMenu: false
        })
    }

    handleDeleteClick() {
        RundownItemUsecase.delete(this.props.data);
    }

    handleOpenDeletePopup() {
        this.setState({
            isDeletePopupOpened: true
        });
    }

    handleCloseDeletePopup() {
        this.setState({
            isDeletePopupOpened: false
        });
    }

	render() {
        if(!this.state.showEditMenu) {
            return (
                <ListItem>
                    <Dialog
                        open={this.state.isDeletePopupOpened}
                        onClose={this.handleCloseDeletePopup.bind(this)}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DeleteForm hide={this.handleCloseDeletePopup.bind(this)} delete={this.handleDeleteClick.bind(this)} itemName={this.props.data.title}/>
                    </Dialog>
                    <ListItem button onClick={((e) => this.handleClickOnRundownItem(e)).bind(this)}>
                        <ListItemAvatar>
                        <Avatar>
                            <CreateIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={this.props.data.title} secondary={this.props.data.text} />
                    </ListItem>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={this.handleOpenDeletePopup.bind(this)}
                    >
                            Delete
                    </Button>
                </ListItem>
            );
        } else {
            return (
                <RundownItemForm rundownId={this.props.rundownId} data={this.props.data} action="EDIT" triggerHide={this.hideForm.bind(this)}/>
            );
        }
	}
}

export default RundownItem;