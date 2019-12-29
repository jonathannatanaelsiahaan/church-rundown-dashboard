import React from "react";
import { connect } from "react-redux";
import style from "components/css/account.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import AccountUsecase from "usecase/account_usecase";

class Account extends React.Component {
	constructor(props) {
		super(props);

		AccountUsecase.fetchAll();
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
					<TextField
						id="standard-full-width"
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
						id="standard-full-width"
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
						id="standard-full-width"
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
						id="standard-full-width"
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
						id="standard-full-width"
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

					<Button variant="contained" color="primary">
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