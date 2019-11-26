import React from "react";
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RundownForm from "components/rundown_form";

class RundownToolbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPopupOpen: false
        }
    }

    handleClickOnCreateRundown() {
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
                <Button aria-label="Create" onClick={this.handleClickOnCreateRundown.bind(this)}>
                    <AddIcon /> {this.props.createButtonLabel}
                </Button>
                <Popover
                    open={isPopupOpen}
                    onClose={this.handleClosePopup.bind(this)}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                >
                    <RundownForm/>
                </Popover>
            </div>
        )
	}
}

export default RundownToolbar;