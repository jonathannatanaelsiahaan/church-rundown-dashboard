import React from "react";
import RundownListContainer from "components/rundown_list_container";
import RundownItemList from "components/rundown_item_list";

class RundownMenu extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			showRundownItem: false,
			showRundownList: true
		}
	}

	handleClickOnRundownList(data) {
		this.setState({
			showRundownList: false,
			showRundownItem: true,
			clickedRundownId: data.rundownId
		});
	}

	handleClickOnRundownItem() {
		this.setState({
			showRundownItem: false,
			showRundownList: true
		})
	}
	
	render() {
		if(this.state.showRundownList) {
			return (
				<RundownListContainer onClickHandler={this.handleClickOnRundownList.bind(this)}/>
			);
		}

		if(this.state.showRundownItem) {
			return (
				<RundownItemList onClickHandler={this.handleClickOnRundownItem.bind(this)} rundownId={this.state.clickedRundownId}/>
			)
		}
	}
}

export default RundownMenu;