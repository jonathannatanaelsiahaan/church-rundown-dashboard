import React from "react";
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RundownItemForm from "components/rundown_item_form";

class RundownItemToolbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPopupOpen: false
        }
    }

    handleClickOnCreateRundownItem() {
        this.setState({
            isPopupOpen: true
        })
    }

    handleClosePopup() {
        this.setState({
            isPopupOpen: false
        })
    }

	render() {
        const isPopupOpen = this.state.isPopupOpen;
        return (
            <div>
                <Button aria-label="Create" onClick={this.handleClickOnCreateRundownItem.bind(this)}>
                    <AddIcon /> {this.props.createButtonLabel}
                </Button>
                <Dialog
                    open={isPopupOpen}
                    onClose={this.handleClosePopup.bind(this)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <RundownItemForm rundownId={this.props.rundownId} action="CREATE" triggerHide={this.handleClosePopup.bind(this)}/>
                </Dialog>
            </div>
        )
	}
}

export default RundownItemToolbar;