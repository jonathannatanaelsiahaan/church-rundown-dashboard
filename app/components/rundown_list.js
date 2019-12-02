import React from "react";
import { connect } from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EventIcon from '@material-ui/icons/Event';

import style from "components/css/rundown_list.css";
import RundownUsecase from "usecase/rundown_usecase"
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import AddIcon from '@material-ui/icons/Add';
import RundownForm from "components/rundown_form";

class RundownList extends React.Component {
    constructor(props) {
		super(props)
		
		RundownUsecase.fetchAll()

		this.state = {
			rundowns: [],
			selectedEditRundown: {},
            isPopupOpen: false
		}
    }

    handleClick(e, rundownID) {
        e.preventDefault();

        const data = {
            rundownId: rundownID
        }

        this.props.onClickHandler(data);
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

	render() {
		const rundowns = this.props.rundowns;
        const isPopupOpen = this.state.isPopupOpen;
		return (
			<div>
				<List 
					component="nav"
					aria-labelledby="nested-list-subheader"
					className={style.root}
				>
					{Object.values(rundowns).map((rundown) => {
						return (
							<div>
								<ListItem>
									<ListItem button onClick={((e) => this.handleClick(e, rundown.ID))}>
										<ListItemAvatar>
										<Avatar>
											<EventIcon />
										</Avatar>
										</ListItemAvatar>
										<ListItemText primary={rundown.title} secondary={rundown.showTime} />
									</ListItem>
									<Button
										variant="contained"
										color="primary"
										size="small"
										onClick={() => this.handleDeleteClick(rundown)}
									>
											Delete
									</Button>
									&nbsp;
									<Button
										variant="contained"
										color="primary"
										size="small"
										onClick={(() => this.handleEditClick(rundown)).bind(this)}
									>
											Edit
									</Button>
								</ListItem>
							</div>
						)
					})}
				</List>
				<div>
					<Button aria-label="Create" onClick={this.handleCreateClick.bind(this)}>
						<AddIcon /> "Create New Rundown"
					</Button>
					<Popover
						open={isPopupOpen}
						onClose={this.handleClosePopup.bind(this)}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'center',
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'center',
						}}
					>
						<RundownForm rundown={this.state.selectedEditRundown} action={this.state.action} />
					</Popover>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	rundowns: state.rundowns
});

export { RundownList };
export default connect(
  mapStateToProps,
  null
)(RundownList);
