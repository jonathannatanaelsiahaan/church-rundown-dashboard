import React from "react";
import style from "components/css/rundown_form.css"

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import RundownUsecase from "usecase/rundown_usecase"
import RundownProtocol from "protocols/rundown_protocol"
import TextField from '@material-ui/core/TextField';

class RundownForm extends React.Component {
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
        
        RundownUsecase.create(rundown.toJson())
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
                defaultValue="2019-05-24T10:30"
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <TextField
                id="endTime"
                label="Rundown End Time"
                type="datetime-local"
                defaultValue="2019-05-24T12:30"
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