import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CreateIcon from '@material-ui/icons/Create';
import RundownItemForm from "components/rundown_item_form";
import RundownItemUsecase from "usecase/rundown_item_usecase";

import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

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

	render() {
        if(!this.state.showEditMenu) {
            return (
                <ListItem>
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
                        startIcon={<DeleteIcon />}
                        onClick={this.handleDeleteClick.bind(this)}
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