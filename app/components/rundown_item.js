import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CreateIcon from '@material-ui/icons/Create';
import RundownItemForm from "components/rundown_item_form";

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

    handleClickCancel() {
        this.setState({
            showEditMenu: false
        })
    }

    handleClickSave(value) {
    }

	render() {
        const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ..........."
        if(!this.state.showEditMenu) {
            return (
                <ListItem button onClick={((e) => this.handleClickOnRundownItem(e, 1)).bind(this)}>
                    <ListItemAvatar>
                    <Avatar>
                        <CreateIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Menyanyikan Kunyanyi Haleluya" secondary={text} />
                </ListItem>
            );
        } else {
            return (
                <RundownItemForm rundownId={this.props.rundownId} />
            );
        }
	}
}

export default RundownItem;