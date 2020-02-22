import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import RundownUsecase from "usecase/rundown_usecase"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import RundownForm from "components/rundown_form";
import DeleteForm from "components/delete_form";

import TextField from '@material-ui/core/TextField';

import DateUtil from "utils/date_util";
import RundownProtocol from "protocols/rundown_protocol";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import RundownList from "components/rundown_list";

class RundownListContainer extends React.Component {
    constructor(props) {
		super(props)

		const startTimeToday = new Date()
		startTimeToday.setHours(0)
		startTimeToday.setMinutes(0)
		startTimeToday.setSeconds(0)

		const endTimeToday = new Date()
		endTimeToday.setHours(23)
		endTimeToday.setMinutes(59)
		endTimeToday.setSeconds(59)

		const defaultRundownStartTime = startTimeToday
		const defaultRundownEndTime = endTimeToday

		this.state = {
			rundowns: [],
			selectedEditRundown: {},
			isPopupOpen: false,
			isDeletePopupOpened: false,
			selectedRundown: {
				title: ""
			},
			selectedShowTime: defaultRundownStartTime,
			selectedEndTime: defaultRundownEndTime
		}
	}
	
	handleFilterClick() {
		const showTime = document.querySelector("#startDate")
		const endDate = document.querySelector("#endDate")

		const selectedShowTime = new Date(showTime.value)
		const selectedEndTime = new Date(endDate.value)

		this.setState({
			selectedShowTime: selectedShowTime,
			selectedEndTime: selectedEndTime
		})

        const rundown = new RundownProtocol({
            showTime: DateUtil.convertToISO(selectedShowTime),
            endTime: DateUtil.convertToISO(selectedEndTime)
		})
		
		RundownUsecase.fetchByFilter(rundown);
	}

	openRundownDetail(rundown) {
		this.props.onClickHandler(rundown);
	}

	handleDeleteClick(rundown) {
		RundownUsecase.delete(rundown)
	}

	handleEditClick(rundown) {
		this.setState({
			selectedEditRundown: rundown,
			action: "EDIT",
			isPopupOpen: true
		})
	}

    handleCreateClick() {
        this.setState({
			isPopupOpen: true,
			action: "CREATE"
        })
    }

    handleClosePopup() {
        this.setState({
            isPopupOpen: false
        })
	}

	handleCloseDeletePopup() {
		this.setState({
			isDeletePopupOpened: false
		})
	}

	handleOpenDeletePopup(rundown) {
		this.setState({
			selectedRundown: rundown,
			isDeletePopupOpened: true
		})
	}

	render() {
		const isPopupOpen = this.state.isPopupOpen;

		return (
			<div>
				<Card>
					<CardContent>
						<List>
							<ListItem>
								Filter By Date
							</ListItem>
							<ListItem>
								<TextField
									id="startDate"
									label="Start From"
									type="datetime-local"
									defaultValue={DateUtil.convertToDisplayedDateWithISOFormat(this.state.selectedShowTime)}
									InputLabelProps={{
										shrink: true,
									}}
								/>
								&nbsp;&nbsp;
								<TextField
									id="endDate"
									label="End in"
									type="datetime-local"
									defaultValue={DateUtil.convertToDisplayedDateWithISOFormat(this.state.selectedEndTime)}
									InputLabelProps={{
										shrink: true,
									}}
								/>
								<Button variant="contained" color="primary" onClick={this.handleFilterClick.bind(this)}>
									Apply Filter
								</Button>
							</ListItem>
						</List>
					</CardContent>
				</Card>
				<br/>
				<br/>
				<br/>
				<div>
					<Button aria-label="Create" onClick={this.handleCreateClick.bind(this)}>
						<AddIcon /> Create New Rundown
					</Button>
					<Dialog
						open={isPopupOpen}
						onClose={this.handleClosePopup.bind(this)}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<RundownForm rundown={this.state.selectedEditRundown} action={this.state.action} close={this.handleClosePopup.bind(this)}/>
					</Dialog>
				</div>

				<Dialog
					open={this.state.isDeletePopupOpened}
					onClose={this.handleCloseDeletePopup.bind(this)}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DeleteForm hide={this.handleCloseDeletePopup.bind(this)} delete={() => this.handleDeleteClick(this.state.selectedRundown)} itemName={this.state.selectedRundown.title}/>
				</Dialog>
				<RundownList 
					openDeletePopup={this.handleOpenDeletePopup.bind(this)} 
					openEditForm={this.handleEditClick.bind(this)} 
					openRundownDetail={this.openRundownDetail.bind(this)}
					selectedStartDate={this.state.selectedShowTime.toISOString()}
					selectedEndDate={this.state.selectedEndTime.toISOString()}
				/>
			</div>
		);
	}
}

export default RundownListContainer;
