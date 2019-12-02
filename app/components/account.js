import React from "react";
import style from "components/css/account.css"
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Account extends React.Component {
	render() {
		return (
            <div className={style.container}>
				<div>
					<Typography variant="h5" gutterBottom>
						Organizer Name : GPIB PAULUS
					</Typography>
					<Typography variant="h6" gutterBottom>
						This organization located near suropati park in Central Jakarta.
					</Typography>
					<TextField
						id="standard-full-width"
						label="Name"
						style={{ margin: 8 }}
						placeholder="Placeholder"
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
						placeholder="Placeholder"
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						id="standard-full-width"
						label="Password"
						style={{ margin: 8 }}
						placeholder="Placeholder"
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

export default Account;