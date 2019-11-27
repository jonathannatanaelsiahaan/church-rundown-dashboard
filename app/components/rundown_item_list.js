import React from "react";
import { connect } from "react-redux";
import List from '@material-ui/core/List';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import RundownItem from 'components/rundown_item';
import style from "components/css/rundown_item_list.css";

import RundownItemToolbar from "components/rundown_item_toolbar";
import RundownItemUsecase from "usecase/rundown_item_usecase";

class RundownItemList extends React.Component {
    constructor(props) {
		super(props)
		
		RundownItemUsecase.fetchAll(this.props.rundownId)
    }

    handleClick(e) {
        e.preventDefault();

        this.props.onClickHandler();
    }

	render() {
        const rundownItems = this.props.rundownItems;
        
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

					{Object.values(rundownItems).map((rundownItem) => {
                        return (
                            <RundownItem data={rundownItem}/>
                        )
					})}
                </List>

                <RundownItemToolbar createButtonLabel="Create New Rundown Item" rundownId={this.props.rundownId}/>
            </div>
		);
	}
}

const mapStateToProps = (state) => ({
	rundownItems: state.rundownItems
});

export { RundownItemList };
export default connect(
  mapStateToProps,
  null
)(RundownItemList);