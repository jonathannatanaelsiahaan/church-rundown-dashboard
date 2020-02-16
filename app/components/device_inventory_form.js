import React from "react";
import style from "components/css/rundown_form.css"

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import DeviceInventoryUseCase from "usecase/device_inventory_usecase"
import DeviceInventoryProtocol from "protocols/device_inventory_protocol"
import TextField from '@material-ui/core/TextField';

import DateUtil from "utils/date_util";

class DeviceInventoryForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if(this.props.action == "EDIT") {
            var splitedPurchaseDate = this.props.deviceInventory.purchaseDate.split(" ");

            document.querySelector("#name").value = this.props.deviceInventory.name;
            document.querySelector("#purchaseDate").value = splitedPurchaseDate[0] + "T" + splitedPurchaseDate[1];
            document.querySelector("#total").value = this.props.deviceInventory.total;
        }
    }

    handleClick() {
        const nameDom = document.querySelector("#name")
        const purchaseDateDom = document.querySelector("#purchaseDate")
        const totalDom = document.querySelector("#total")
        var total = totalDom.value

        if(isNaN(total)) {
            totalDom.value = "Must be integer"
            totalDom.style.color = "red"
            return
        } else {
            total = parseInt(total)
        }

        const deviceInventory = new DeviceInventoryProtocol({
            name: nameDom.value,
            purchaseDate: new Date(purchaseDateDom.value).toISOString(),
            total: parseInt(totalDom.value)
        })
        
        if(this.props.action == "EDIT") {
            const deviceInventoryData = deviceInventory.toJson();
            deviceInventoryData.ID = this.props.deviceInventory.ID;
            DeviceInventoryUseCase.update(deviceInventoryData)
            this.props.close();

            return
        } 

        if(this.props.action == "CREATE") {
            DeviceInventoryUseCase.create(deviceInventory.toJson())
            this.props.close();

            return
        }
    }

    onchangeHandler() {
        const totalDom = document.querySelector("#total")
        totalDom.style.color = "black"
    }

    render() {
        return (<div className={style.container}>
            <TextField
                id="name"
                label="Nama Perangkat"
                style={{ margin: 8 }}
                placeholder=""
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <TextField
                id="purchaseDate"
                label="Tanggal Pembelian"
                type="datetime-local"
                defaultValue={DateUtil.convertToDisplayedDateWithISOFormat(new Date())}
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <TextField
                id="total"
                label="Total barang"
                style={{ margin: 8 }}
                placeholder=""
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={this.onchangeHandler}
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

export default DeviceInventoryForm;