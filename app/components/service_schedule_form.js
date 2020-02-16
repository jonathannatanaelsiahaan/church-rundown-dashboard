import React from "react";
import style from "components/css/rundown_item_form.css"

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import RichTextEditor from 'react-rte';

import ServiceScheduleProtocol from "protocols/service_schedule_protocol";
import ServiceScheduleUsecase from "usecase/service_schedule_usecase";

import DateUtil from "utils/date_util";

class ServiceScheduleForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            textEditorValue: RichTextEditor.createEmptyValue()
        }
    }

    onChange = (value) => {
        this.setState({
            textEditorValue: value
        });
        
        if (this.props.onChange) {
          this.props.onChange(
            value.toString('html')
          );
        }
    };

    componentDidMount() {
        if(this.props.action == "EDIT") {
            var splitedDate = this.props.serviceSchedule.date.split(" ");

            document.querySelector("#name").value = this.props.serviceSchedule.name;
            document.querySelector("#date").value = splitedDate[0] + "T" + splitedDate[1];
            
            this.setState({
                 textEditorValue: RichTextEditor.createValueFromString(this.props.serviceSchedule.text, 'html')
            })
        }
    }

    handleClickSave() {
        const nameDom = document.querySelector("#name")
        const dateDom = document.querySelector("#date")

        const serviceSchedule = new ServiceScheduleProtocol({
            name: nameDom.value,
            date: new Date(dateDom.value).toISOString(),
            text: this.state.textEditorValue.toString('html')
        })
        
        if (this.props.action == "CREATE") {
            ServiceScheduleUsecase.create(serviceSchedule.toJson())

            this.props.close();
            return
        }

        if (this.props.action == "EDIT") {
            const serviceScheduleData = serviceSchedule.toJson()
            serviceScheduleData.id = this.props.serviceSchedule.ID;
            ServiceScheduleUsecase.update(serviceScheduleData)

            this.props.close();
            return
        }
    }

    handleClickCancel() {
        this.props.close();
    }

    render() {
        return (<div className={style.container}>
            <TextField
                id="name"
                label="Nama Jenis Pelayanan"
                style={{ margin: 8 }}
                placeholder="ex: Pemusik Ibadah Minggu"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <TextField
                id="date"
                label="Waktu Pelayanan"
                type="datetime-local"
                defaultValue={DateUtil.convertToDisplayedDateWithISOFormat(new Date())}
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <RichTextEditor
                value={this.state.textEditorValue}
                onChange={this.onChange}
            />

            <br/><br/>
            <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={style.button}
                    startIcon={<SaveIcon />}
                    onClick={this.handleClickSave.bind(this)}
            >
                    Save
            </Button> &nbsp;
            <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={style.button}
                    onClick={this.handleClickCancel.bind(this)}
            >
                    Cancel
            </Button>
        </div>)
    }
}

export default ServiceScheduleForm;


