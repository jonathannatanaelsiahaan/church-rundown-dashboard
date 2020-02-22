import React from "react";
import { connect } from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import style from "components/css/rundown_list.css";
import SectorCoordinatorUsecase from "usecase/sector_coordinator_usecase"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import DeleteForm from "components/delete_form";
import SectorCoordinatorForm from "components/sector_coordinator_form";
import Avatar from '@material-ui/core/Avatar';
import EventIcon from '@material-ui/icons/Event';
import ConcregationUsecase from "usecase/concregation_usecase";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PdfIcon from '@material-ui/icons/PictureAsPdf';
import SectorCoordinatorMenuPdf from "components/sector_coordinator_menu_pdf";

class SectorCoordinatorMenu extends React.Component {
    constructor(props) {
        super(props);

		SectorCoordinatorUsecase.fetchAll()
		ConcregationUsecase.fetchAll()

		this.state = {
			sectorCoordinators: [],
			selectedEditSectorCoordinator: {},
			isPopupOpen: false,
			isDeletePopupOpened: false,
			selectedSectorCoordinator: {
				name: ""
			},
			exportToPdf: false
		}

		this.ref = React.createRef();
    }

    handleClick(e, sectorCoordinatorID) {
        e.preventDefault();

        const data = {
            sectorCoordinatorId: sectorCoordinatorID
        }

        this.props.onClickHandler(data);
	}

	handleDeleteClick(sectorCoordinator) {
		SectorCoordinatorUsecase.delete(sectorCoordinator)
	}

	handleEditClick(sectorCoordinator) {
		this.setState({
			selectedEditSectorCoordinator: sectorCoordinator,
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

	handleOpenDeletePopup(sectorCoordinator) {
		this.setState({
			selectedSectorCoordinator: sectorCoordinator,
			isDeletePopupOpened: true
		})
	}

	renderAsPdf() {
		this.setState({
			exportToPdf: true
		})
	}

    render() {
		const concregations = this.props.concregations;
		const sectorCoordinators = this.props.sectorCoordinators;
		const isPopupOpen = this.state.isPopupOpen;
		var pdfMenu = (
			<Button aria-label="Create" onClick={this.renderAsPdf.bind(this)}>
				<PdfIcon /> Export To PDF
			</Button>
		); 

		if(concregations == null || concregations == {} || Object.values(concregations).length == 0) {
			return (<div/>)
		}

		if(this.state.exportToPdf) {
			pdfMenu = <SectorCoordinatorMenuPdf concregations={concregations} sectorCoordinators={sectorCoordinators}/>;
		}
		
        return (
			<div ref={this.ref}>
				<Typography variant="h5" gutterBottom>
					Menu Sektor Kordinator
				</Typography>
				{ pdfMenu }
				<Dialog
					open={this.state.isDeletePopupOpened}
					onClose={this.handleCloseDeletePopup.bind(this)}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DeleteForm hide={this.handleCloseDeletePopup.bind(this)} delete={() => this.handleDeleteClick(this.state.selectedSectorCoordinator)} itemName={this.state.selectedSectorCoordinator.name}/>
				</Dialog>
				<List 
					component="nav"
					aria-labelledby="nested-list-subheader"
					className={style.root}
				>
					{Object.values(sectorCoordinators).map((sectorCoordinator) => {
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
													<ListItemText primary={"Nama Sektor"} secondary={sectorCoordinator.name} />
												</ListItem>
												<ListItem>
													<ListItemText primary={"Nama Kordinator"} secondary={concregations[sectorCoordinator.concregationID].name} />
												</ListItem>
											</List>
											<Button
												variant="contained"
												color="primary"
												size="small"
												onClick={(() => this.handleOpenDeletePopup(sectorCoordinator)).bind(this)}
											>
													Delete
											</Button>
											&nbsp;
											<Button
												variant="contained"
												color="primary"
												size="small"
												onClick={(() => this.handleEditClick(sectorCoordinator)).bind(this)}
											>
													Edit
											</Button>
										</ListItem>
									</CardContent>
								</Card>
								<br/>
							</div>
						)
					})}
				</List>
				<div>
					<Button aria-label="Create" onClick={this.handleCreateClick.bind(this)}>
						<AddIcon /> Create New Kordinator Sektor
					</Button>
					<Dialog
						maxWidth="md"
						fullWidth={true}
						open={isPopupOpen}
						onClose={this.handleClosePopup.bind(this)}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<SectorCoordinatorForm sectorCoordinator={this.state.selectedEditSectorCoordinator} concregations={concregations} action={this.state.action} close={this.handleClosePopup.bind(this)}/>
					</Dialog>
				</div>
			</div>
		);
    }
}

const mapStateToProps = (state) => ({
	sectorCoordinators: state.sectorCoordinators,
	concregations: state.concregations
});

export { SectorCoordinatorMenu };
export default connect(
  mapStateToProps,
  null
)(SectorCoordinatorMenu);