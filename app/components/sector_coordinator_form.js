import React from "react";
import style from "components/css/rundown_form.css"

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import SectorCoordinatorUseCase from "usecase/sector_coordinator_usecase"
import SectorCoordinatorProtocol from "protocols/sector_coordinator_protocol"
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

class SectorCoordinatorForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            concregations: this.props.concregations,
            selectedConcregation: Object.values(this.props.concregations)[0].ID
        }
    }

    componentDidMount() {
        if(this.props.action == "EDIT") {
            document.querySelector("#name").value = this.props.sectorCoordinator.name;
            this.setState({
                selectedConcregation: this.props.sectorCoordinator.concregationID
            })
        }
    }

    handleClick() {
        const nameDom = document.querySelector("#name")

        const sectorCoordinator = new SectorCoordinatorProtocol({
            name: nameDom.value,
            concregationID: this.state.selectedConcregation
        })
        
        if(this.props.action == "EDIT") {
            const sectorCoordinatorData = sectorCoordinator.toJson();
            sectorCoordinatorData.ID = this.props.sectorCoordinator.ID;
            SectorCoordinatorUseCase.update(sectorCoordinatorData)
            this.props.close();

            return
        } 

        if(this.props.action == "CREATE") {
            SectorCoordinatorUseCase.create(sectorCoordinator.toJson())
            this.props.close();

            return
        }
    }

    handleChange(event) {
        const concregationId = event.target.value;
        this.setState({
            selectedConcregation: concregationId
        })
    }

    render() {
        const concregations = this.state.concregations;

        return (<div className={style.container}>
            <TextField
                id="name"
                label="Nama Sektor"
                style={{ margin: 8 }}
                placeholder="ex: Sektor Pelayanan 1"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <InputLabel id="demo-mutiple-name-label">Nama Koordinator</InputLabel>
            <Select
                labelId="demo-customized-select-label"
                id="coordinator"
                value={this.state.selectedConcregation}
                onChange={this.handleChange.bind(this)}
                input={<Input />}
            >
                {Object.values(concregations).map(concregation => (
                    <MenuItem value={concregation.ID}>{concregation.name}</MenuItem>
                ))}
            </Select>

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

export default SectorCoordinatorForm;