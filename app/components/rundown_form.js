import React from "react";
import style from "components/css/rundown_form.css"

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import RundownUsecase from "usecase/rundown_usecase"
import RundownProtocol from "protocols/rundown_protocol"
import TextField from '@material-ui/core/TextField';

import DateUtil from "utils/date_util";

class RundownForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if(this.props.action == "EDIT") {
            var splitedShowTime = this.props.rundown.showTime.split(" ");
            var splitedEndTime = this.props.rundown.endTime.split(" ");

            document.querySelector("#title").value = this.props.rundown.title;
            document.querySelector("#subtitle").value = this.props.rundown.subtitle;
            document.querySelector("#showTime").value = splitedShowTime[0] + "T" + splitedShowTime[1];
            document.querySelector("#endTime").value = splitedEndTime[0] + "T" + splitedEndTime[1];
        }
    }

    handleClick() {
        const titleDom = document.querySelector("#title")
        const subtitleDom = document.querySelector("#subtitle")
        const showTimeDom = document.querySelector("#showTime")
        const endTimeDom = document.querySelector("#endTime")

        const rundown = new RundownProtocol({
            title: titleDom.value,
            subtitle: subtitleDom.value,
            showTime: new Date(showTimeDom.value).toISOString(),
            endTime: new Date(endTimeDom.value).toISOString()
        })
        
        if(this.props.action == "EDIT") {
            const rundownData = rundown.toJson();
            rundownData.ID = this.props.rundown.ID;
            RundownUsecase.update(rundownData)
            this.props.close();

            return
        } 

        if(this.props.action == "CREATE") {
            RundownUsecase.create(rundown.toJson())
            this.props.close();

            return
        }
    }

    render() {
        return (<div className={style.container}>
            <TextField
                id="title"
                label="Rundown Title"
                style={{ margin: 8 }}
                placeholder="Your Rundown Title"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <TextField
                id="subtitle"
                label="Rundown Subtitle"
                style={{ margin: 8 }}
                placeholder="Your Rundown Subtitle"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <TextField
                id="showTime"
                label="Rundown Show Time"
                type="datetime-local"
                defaultValue={DateUtil.convertToDisplayedDateWithISOFormat(new Date())}
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <TextField
                id="endTime"
                label="Rundown End Time"
                type="datetime-local"
                defaultValue={DateUtil.convertToDisplayedDateWithISOFormat(new Date())}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <br/><br/>
            <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={style.button}
                    startIcon={<SaveIcon />}
                    onClick={this.handleClick.bind(this)}
            >
                    Save
            </Button>
        </div>)
    }
}

export default RundownForm;