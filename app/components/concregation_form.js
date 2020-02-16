import React from "react";
import style from "components/css/rundown_form.css"

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import ConcregationUseCase from "usecase/concregation_usecase"
import ConcregationProtocol from "protocols/concregation_protocol"
import TextField from '@material-ui/core/TextField';

import DateUtil from "utils/date_util";

class ConcregationForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if(this.props.action == "EDIT") {
            document.querySelector("#name").value = this.props.concregation.name;
            document.querySelector("#age").value = this.props.concregation.age;
            document.querySelector("#address").value = this.props.concregation.address;
        }
    }

    handleClick() {
        const nameDom = document.querySelector("#name")
        const ageDom = document.querySelector("#age")
        const addressDom = document.querySelector("#address")

        const concregation = new ConcregationProtocol({
            name: nameDom.value,
            age: ageDom.value,
            address: addressDom.value
        })
        
        if(this.props.action == "EDIT") {
            const concregationData = concregation.toJson();
            concregationData.ID = this.props.concregation.ID;
            ConcregationUseCase.update(concregationData)
            this.props.close();

            return
        } 

        if(this.props.action == "CREATE") {
            ConcregationUseCase.create(concregation.toJson())
            this.props.close();

            return
        }
    }

    render() {
        return (<div className={style.container}>
            <TextField
                id="name"
                label="Nama Jemaat"
                style={{ margin: 8 }}
                placeholder=""
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <TextField
                id="age"
                label="Umur"
                style={{ margin: 8 }}
                placeholder=""
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <TextField
                id="address"
                label="Alamat"
                style={{ margin: 8 }}
                placeholder=""
                fullWidth
                margin="normal"
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

export default ConcregationForm;