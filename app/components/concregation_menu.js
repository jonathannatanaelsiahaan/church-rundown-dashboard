import React from "react";
import { connect } from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import style from "components/css/rundown_list.css";
import ConcregationUsecase from "usecase/concregation_usecase"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import DeleteForm from "components/delete_form";
import ConcregationForm from "components/concregation_form";
import Avatar from '@material-ui/core/Avatar';
import EventIcon from '@material-ui/icons/Event';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PdfIcon from '@material-ui/icons/PictureAsPdf';
import ConcregationMenuPdf from "components/concregation_menu_pdf";

class ConcregationMenu extends React.Component {
    constructor(props) {
        super(props);

		ConcregationUsecase.fetchAll()

		this.state = {
			concregations: [],
			selectedEditConcregation: {},
			isPopupOpen: false,
			isDeletePopupOpened: false,
			selectedConcregation: {
				name: ""
			},
			exportToPdf: false
		}
    }

    handleClick(e, concregationID) {
        e.preventDefault();

        const data = {
            concregationId: concregationID
        }

        this.props.onClickHandler(data);
	}

	handleDeleteClick(concregation) {
		ConcregationUsecase.delete(concregation)
	}

	handleEditClick(concregation) {
		this.setState({
			selectedEditConcregation: concregation,
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

	handleOpenDeletePopup(concregation) {
		this.setState({
			selectedConcregation: concregation,
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
        const isPopupOpen = this.state.isPopupOpen;
		var pdfMenu = (
			<Button aria-label="Create" onClick={this.renderAsPdf.bind(this)}>
				<PdfIcon /> Export To PDF
			</Button>
		); 

		if(this.state.exportToPdf) {
			pdfMenu = <ConcregationMenuPdf concregations={concregations} />;
		}

        return (
			<div>
				<Typography variant="h5" gutterBottom>
					Menu Data Jemaat
				</Typography>
				{ pdfMenu }
				<Dialog
					open={this.state.isDeletePopupOpened}
					onClose={this.handleCloseDeletePopup.bind(this)}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DeleteForm hide={this.handleCloseDeletePopup.bind(this)} delete={() => this.handleDeleteClick(this.state.selectedConcregation)} itemName={this.state.selectedConcregation.title}/>
				</Dialog>
				<List 
					component="nav"
					aria-labelledby="nested-list-subheader"
					className={style.root}
				>
					{Object.values(concregations).map((concregation) => {
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
													<ListItemText primary={"Nama"} secondary={concregation.name} />
												</ListItem>
												<ListItem>
													<ListItemText primary={"Umur"} secondary={concregation.age} />
												</ListItem>
												<ListItem>
													<ListItemText primary={"Alamat"} secondary={concregation.address} />
												</ListItem>
											</List>
											<Button
												variant="contained"
												color="primary"
												size="small"
												onClick={(() => this.handleOpenDeletePopup(concregation)).bind(this)}
											>
													Delete
											</Button>
											&nbsp;
											<Button
												variant="contained"
												color="primary"
												size="small"
												onClick={(() => this.handleEditClick(concregation)).bind(this)}
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
						<AddIcon /> Create New Jemaat
					</Button>
					<Dialog
						open={isPopupOpen}
						onClose={this.handleClosePopup.bind(this)}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<ConcregationForm concregation={this.state.selectedEditConcregation} action={this.state.action} close={this.handleClosePopup.bind(this)}/>
					</Dialog>
				</div>
			</div>
		);
    }
}

const mapStateToProps = (state) => ({
	concregations: state.concregations
});

export { ConcregationMenu };
export default connect(
  mapStateToProps,
  null
)(ConcregationMenu);