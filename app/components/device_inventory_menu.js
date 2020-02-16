import React from "react";
import { connect } from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import style from "components/css/rundown_list.css";
import DeviceInventoryUsecase from "usecase/device_inventory_usecase"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import DeleteForm from "components/delete_form";
import DeviceInventoryForm from "components/device_inventory_form";
import Avatar from '@material-ui/core/Avatar';
import EventIcon from '@material-ui/icons/Event';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PdfIcon from '@material-ui/icons/PictureAsPdf';
import DeviceInventoryMenuPdf from "components/device_inventory_menu_pdf";

class DeviceInventoryMenu extends React.Component {
    constructor(props) {
        super(props);

		DeviceInventoryUsecase.fetchAll()

		this.state = {
			deviceInventorys: [],
			selectedEditDeviceInventory: {},
			isPopupOpen: false,
			isDeletePopupOpened: false,
			selectedDeviceInventory: {
				name: ""
			},
			exportToPdf: false
		}
    }

    handleClick(e, deviceInventoryID) {
        e.preventDefault();

        const data = {
            deviceInventoryId: deviceInventoryID
        }

        this.props.onClickHandler(data);
	}

	handleDeleteClick(deviceInventory) {
		DeviceInventoryUsecase.delete(deviceInventory)
	}

	handleEditClick(deviceInventory) {
		this.setState({
			selectedEditDeviceInventory: deviceInventory,
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

	handleOpenDeletePopup(deviceInventory) {
		this.setState({
			selectedDeviceInventory: deviceInventory,
			isDeletePopupOpened: true
		})
	}

	renderAsPdf() {
		this.setState({
			exportToPdf: true
		})
	}

    render() {
		const deviceInventorys = this.props.deviceInventorys;
        const isPopupOpen = this.state.isPopupOpen;
		var pdfMenu = (
			<Button aria-label="Create" onClick={this.renderAsPdf.bind(this)}>
				<PdfIcon /> Export To PDF
			</Button>
		); 

		if(this.state.exportToPdf) {
			pdfMenu = <DeviceInventoryMenuPdf deviceInventorys={deviceInventorys} />;
		}

        return (
			<div>
				<Typography variant="h5" gutterBottom>
					Menu Inventory Perangkat
				</Typography>
				{ pdfMenu }
				<Dialog
					open={this.state.isDeletePopupOpened}
					onClose={this.handleCloseDeletePopup.bind(this)}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DeleteForm hide={this.handleCloseDeletePopup.bind(this)} delete={() => this.handleDeleteClick(this.state.selectedDeviceInventory)} itemName={this.state.selectedDeviceInventory.name}/>
				</Dialog>
				<List 
					component="nav"
					aria-labelledby="nested-list-subheader"
					className={style.root}
				>
					{Object.values(deviceInventorys).map((deviceInventory) => {
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
													<ListItemText primary={"Nama Perangkat"} secondary={deviceInventory.name} />
												</ListItem>
												<ListItem>
													<ListItemText primary={"Tanggal Pembelian"} secondary={deviceInventory.purchaseDate} />
												</ListItem>
												<ListItem>
													<ListItemText primary={"Total Barang"} secondary={deviceInventory.total} />
												</ListItem>
											</List>
											<Button
												variant="contained"
												color="primary"
												size="small"
												onClick={(() => this.handleOpenDeletePopup(deviceInventory)).bind(this)}
											>
													Delete
											</Button>
											&nbsp;
											<Button
												variant="contained"
												color="primary"
												size="small"
												onClick={(() => this.handleEditClick(deviceInventory)).bind(this)}
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
						<AddIcon /> Create New Perangkat
					</Button>
					<Dialog
						open={isPopupOpen}
						onClose={this.handleClosePopup.bind(this)}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<DeviceInventoryForm deviceInventory={this.state.selectedEditDeviceInventory} action={this.state.action} close={this.handleClosePopup.bind(this)}/>
					</Dialog>
				</div>
			</div>
		);
    }
}

const mapStateToProps = (state) => ({
	deviceInventorys: state.deviceInventorys
});

export { DeviceInventoryMenu };
export default connect(
  mapStateToProps,
  null
)(DeviceInventoryMenu);