import React from "react";
import List from '@material-ui/core/List';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import RundownItem from 'components/rundown_item'
import style from "components/css/rundown_item_list.css"

import RundownItemToolbar from "components/rundown_item_toolbar"

class RundownItemList extends React.Component {
    handleClick(e) {
        e.preventDefault();

        this.props.onClickHandler();
    }

	render() {
		return (
            <div>
                <Button aria-label="Back" onClick={this.handleClick.bind(this)}>
                    <ArrowBackIcon /> Back
                </Button>
                <List 
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={style.root}
                >
                    <RundownItem/>
                    <RundownItem/>
                </List>

                <RundownItemToolbar createButtonLabel="Create New Rundown Item" />
            </div>
		);
	}
}

export default RundownItemList;