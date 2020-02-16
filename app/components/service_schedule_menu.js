import React from "react";
import { connect } from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import style from "components/css/rundown_list.css";
import ServiceScheduleUsecase from "usecase/service_schedule_usecase"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import DeleteForm from "components/delete_form";
import ServiceScheduleForm from "components/service_schedule_form";
import Avatar from '@material-ui/core/Avatar';
import EventIcon from '@material-ui/icons/Event';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import HtmlComponent from 'components/html_component';

class ServiceScheduleMenu extends React.Component {
    constructor(props) {
        super(props);

		ServiceScheduleUsecase.fetchAll()

		this.state = {
			serviceSchedules: [],
			selectedEditServiceSchedule: {},
			isPopupOpen: false,
			isDeletePopupOpened: false,
			selectedServiceSchedule: {
				name: ""
			}
		}
    }

    handleClick(e, serviceScheduleID) {
        e.preventDefault();

        const data = {
            serviceScheduleId: serviceScheduleID
        }

        this.props.onClickHandler(data);
	}

	handleDeleteClick(serviceSchedule) {
		ServiceScheduleUsecase.delete(serviceSchedule)
	}

	handleEditClick(serviceSchedule) {
		this.setState({
			selectedEditServiceSchedule: serviceSchedule,
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

	handleOpenDeletePopup(serviceSchedule) {
		this.setState({
			selectedServiceSchedule: serviceSchedule,
			isDeletePopupOpened: true
		})
	}

    render() {
		const serviceSchedules = this.props.serviceSchedules;
        const isPopupOpen = this.state.isPopupOpen;
        return (
			<div>
				<Typography variant="h5" gutterBottom>
					Menu Jadwal Pelayanan
				</Typography>
				<Dialog
					open={this.state.isDeletePopupOpened}
					onClose={this.handleCloseDeletePopup.bind(this)}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DeleteForm hide={this.handleCloseDeletePopup.bind(this)} delete={() => this.handleDeleteClick(this.state.selectedServiceSchedule)} itemName={this.state.selectedServiceSchedule.name}/>
				</Dialog>
				<List 
					component="nav"
					aria-labelledby="nested-list-subheader"
					className={style.root}
				>
					{Object.values(serviceSchedules).map((serviceSchedule) => {
						return (
							<div>
								<Card>
									<CardContent>
										<ListItem>
											<List>
												<ListItem>
													<ListItemAvatar>
													<Avatar>
														<EventIcon />
													</Avatar>
													</ListItemAvatar>
												</ListItem>
												<ListItem>
													<ListItemText primary={"Nama Pelayanan"} secondary={serviceSchedule.name} />
												</ListItem>
												<ListItem>
													<ListItemText primary={"Tanggal"} secondary={serviceSchedule.date} />
												</ListItem>
												<ListItem>
													<Card>
														<CardContent>
															<HtmlComponent html={serviceSchedule.text} />
														</CardContent>
													</Card>
												</ListItem>
											</List>
											<Button
												variant="contained"
												color="primary"
												size="small"
												onClick={(() => this.handleOpenDeletePopup(serviceSchedule)).bind(this)}
											>
													Delete
											</Button>
											&nbsp;
											<Button
												variant="contained"
												color="primary"
												size="small"
												onClick={(() => this.handleEditClick(serviceSchedule)).bind(this)}
											>
													Edit
											</Button>
										</ListItem>
									</CardContent>
								</Card>
							</div>
						)
					})}
				</List>
				<div>
					<Button aria-label="Create" onClick={this.handleCreateClick.bind(this)}>
						<AddIcon /> Create New Jadwal Pelayanan
					</Button>
					<Dialog
						open={isPopupOpen}
						onClose={this.handleClosePopup.bind(this)}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<ServiceScheduleForm serviceSchedule={this.state.selectedEditServiceSchedule} action={this.state.action} close={this.handleClosePopup.bind(this)}/>
					</Dialog>
				</div>
			</div>
		);
    }
}

const mapStateToProps = (state) => ({
	serviceSchedules: state.serviceSchedules
});

export { ServiceScheduleMenu };
export default connect(
  mapStateToProps,
  null
)(ServiceScheduleMenu);