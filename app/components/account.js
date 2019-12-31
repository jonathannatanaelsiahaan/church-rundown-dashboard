import React from "react";
import { connect } from "react-redux";
import style from "components/css/account.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AccountUsecase from "usecase/account_usecase";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class Account extends React.Component {
	constructor(props) {
		super(props);

		AccountUsecase.fetchAll();

		this.state = {
			showSuccessNotification: false
		}
	}

	handleUpdate(event) {
		event.preventDefault();

		const globalData = JSON.parse(localStorage.getItem("data"));

		const organizerId = globalData.organizer.ID;

		const organizerNameDom = document.querySelector("#organizerName");
		const organizerDescDom = document.querySelector("#organizerDesc");
		const nameDom = document.querySelector("#name");
		const usernameDom = document.querySelector("#username");
		const passwordDom = document.querySelector("#password");

		const organizerName = organizerNameDom.value || organizerNameDom.placeholder;
		const organizerDesc = organizerDescDom.value || organizerDescDom.placeholder;

		const userId = globalData.user.id;
		const name = nameDom.value || nameDom.placeholder;

		const accountId = globalData.account.id;
		const username = usernameDom.value || usernameDom.placeholder;
		const password = passwordDom.value || passwordDom.placeholder;

		const data = {
			user: {
				id: userId,
				name: name
			},
			account: {
				id: accountId,
				username: username,
				password: password
			},
			organizer: {
				id: organizerId,
				name: organizerName,
				description: organizerDesc
			}
		};

		AccountUsecase.updateData(data, (error) => {
			if(error != null) {
				this.setState({
					showSuccessNotification: true,
					notificationMessage: error
				})
			} else {
				this.setState({
					showSuccessNotification: true,
					notificationMessage: "Update Success!!"
				})	
			}
			
			document.querySelector("#organizerName").value = "";
			document.querySelector("#organizerDesc").value = "";
			document.querySelector("#name").value = "";
			document.querySelector("#username").value = "";
			document.querySelector("#password").value = "";
		});
	}

	handleCloseNotification() {
		this.setState({
			showSuccessNotification: false
		})
	}

	render() {
		if(this.props.organizers == null 
			|| this.props.accounts == null 
			|| this.props.users == null) {
				return (<div/>)
		}
		
		if(this.props.organizers == {} 
			|| this.props.accounts == {} 
			|| this.props.users == {}) {
				return (<div/>)
		}	

		const globalData = JSON.parse(localStorage.getItem("data"));

		const organizer = this.props.organizers[globalData.organizer.ID]
		const account = this.props.accounts[globalData.account.id]
		const user = this.props.users[globalData.user.id]

		if(organizer == null
			|| account == null
			|| user == null) {
				return (<div/>)
		}

		if(organizer == {} 
			|| account == {}
			|| user == {}) {
				return (<div/>)
		}

		return (
            <div className={style.container}>
				<div>
					<Snackbar
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'top',
						}}
						open={this.state.showSuccessNotification}
						autoHideDuration={6000}
						onClose={this.handleCloseNotification.bind(this)}
						ContentProps={{
							'aria-describedby': 'message-id',
						}}
						message={<span id="message-id">{this.state.notificationMessage}</span>}
						action={[
							<IconButton
								key="close"
								aria-label="close"
								color="inherit"
								onClick={this.handleCloseNotification.bind(this)}
							>
								<CloseIcon />
							</IconButton>,
						]}
					/>
					<TextField
						id="organizerName"
						label="Organizer Name"
						style={{ margin: 8 }}
						placeholder={organizer.name}
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						id="organizerDesc"
						label="Organizer Description"
						style={{ margin: 8 }}
						placeholder={organizer.description}
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						id="name"
						label="Name"
						style={{ margin: 8 }}
						placeholder={user.name}
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						id="username"
						label="Username"
						style={{ margin: 8 }}
						placeholder={account.username}
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						id="password"
						label="Password"
						type="password"
						style={{ margin: 8 }}
						placeholder={account.password}
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
					/>

					<Button variant="contained" color="primary" onClick={this.handleUpdate.bind(this)}>
						Update
					</Button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	accounts: state.accounts,
	organizers: state.organizers,
	users: state.users
});

export { Account };
export default connect(
  mapStateToProps,
  null
)(Account);