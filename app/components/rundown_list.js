import React from "react";
import { connect } from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EventIcon from '@material-ui/icons/Event';

import style from "components/css/rundown_list.css";
import RundownToolbar from "components/rundown_toolbar";

import RundownUsecase from "usecase/rundown_usecase"

import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

class RundownList extends React.Component {
    constructor(props) {
		super(props)
		
		RundownUsecase.fetchAll()

		this.state = {
			rundowns: []
		}
    }

    handleClick(e, rundownItemID) {
        e.preventDefault();

        const data = {
            rundownId: rundownItemID
        }

        this.props.onClickHandler(data);
	}

	handleDeleteClick(rundown) {
		RundownUsecase.delete(rundown)
	}

	render() {
		const rundowns = this.props.rundowns;
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
								<ListItem button onClick={((e) => this.handleClick(e, 1))}>
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
									startIcon={<DeleteIcon />}
									onClick={() => this.handleDeleteClick(rundown)}
								>
										Delete
								</Button>
							</div>
						)
					})}
				</List>
				<RundownToolbar createButtonLabel="Create New Rundown" />
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
