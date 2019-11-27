import React from "react";
import style from "components/css/rundown_item_form.css"

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import RichTextEditor from 'react-rte';

import RundownItemProtocol from "protocols/rundown_item_protocol";
import RundownItemUsecase from "usecase/rundown_item_usecase";

class RundownItemForm extends React.Component {
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
            document.querySelector("#title").value = this.props.data.title;
            document.querySelector("#subtitle").value = this.props.data.subtitle;
            
            this.setState({
                 textEditorValue: RichTextEditor.createValueFromString(this.props.data.text, 'html')
            })
        }
    }

    handleClickSave() {
        const titleDom = document.querySelector("#title")
        const subtitleDom = document.querySelector("#subtitle")

        const rundownItem = new RundownItemProtocol({
            title: titleDom.value,
            subtitle: subtitleDom.value,
            text: this.state.textEditorValue.toString('html'),
            rundownId: this.props.rundownId
        })
        
        if (this.props.action == "CREATE") {
            RundownItemUsecase.create(rundownItem.toJson())

            this.props.triggerHide();
            return
        }

        if (this.props.action == "EDIT") {
            const rundownItemData = rundownItem.toJson()
            rundownItemData.id = this.props.data.ID;
            RundownItemUsecase.update(rundownItemData)

            this.props.triggerHide();
            return
        }
    }

    handleClickCancel() {
        this.props.triggerHide();
    }

    render() {
        return (<div className={style.container}>
            <TextField
                id="title"
                label="Rundown Item Title"
                style={{ margin: 8 }}
                placeholder="Your Rundown Item Title"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <TextField
                id="subtitle"
                label="Rundown Item Subtitle"
                style={{ margin: 8 }}
                placeholder="Your Rundown Item Subtitle"
                fullWidth
                margin="normal"
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

export default RundownItemForm;


