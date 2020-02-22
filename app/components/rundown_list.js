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

class RundownList extends React.Component {
    constructor(props) {
		super(props)
		
		RundownUsecase.fetchAll()
    }
    
    handleClick(e, rundownID) {
        e.preventDefault();

        const data = {
            rundownId: rundownID
        }

        this.props.openRundownDetail(data);
	}

	handleEditClick(rundown) {
        this.props.openEditForm(rundown)
	}

	handleOpenDeletePopup(rundown) {
        this.props.openDeletePopup(rundown)
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
					{rundowns.map((rundown) => {
						return (
							<div>
								<ListItem>
									<ListItem button onClick={((e) => this.handleClick(e, rundown.ID))}>
										<ListItemAvatar>
										<Avatar>
											<EventIcon />
										</Avatar>
										</ListItemAvatar>
										<ListItemText primary={rundown.title} secondary={rundown.showTime + " - " + rundown.endTime} />
									</ListItem>
									<Button
										variant="contained"
										color="primary"
										size="small"
										onClick={(() => this.handleOpenDeletePopup(rundown)).bind(this)}
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
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
    rundowns: Object.values(state.rundowns).filter(
        (rundown) => { 
            return rundown.startDate >= props.selectedStartDate && rundown.endDate <= props.selectedEndDate;
        })
});

export { RundownList };
export default connect(
  mapStateToProps,
  null
)(RundownList);