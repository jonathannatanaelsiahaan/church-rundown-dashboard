import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Register from "components/register";
import Login from "components/login";

class Main extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default Main;