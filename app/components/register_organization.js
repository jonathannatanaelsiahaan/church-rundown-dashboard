import React from "react"
import style from "components/css/register.css"

class Register extends React.Component {
    constructor(props) {
        super(props)
    }

    onClickHandler(event) {
        event.preventDefault();
        const organizationDom = document.querySelector("#organization-name")

        const data = {
            organizer: {
                name: organizationDom.value,
                description: "default description"
            }
        }

        this.props.onClickListener(data);
    }
    
    render() {
            return (
                <div className={style.container}>
                    <div className={style.session}>
                        <div className={style.left}>
                        </div>
                        <form action="" className={style.logIn} autocomplete="off"> 
                        <h4>Church Rundown Dashboard</h4>
                        <p>Welcome! Please Create Your Organization First</p>
                        <div className={style.floatingLabel}>
                            <input placeholder="Organization Name" type="text" name="organization-name" id="organization-name" autocomplete="off"/>
                            <div className={style.icon}>
                            </div>
                        </div>
                        <button type="submit" onClick={this.onClickHandler.bind(this)} className={style.login}>Next</button>
                        </form>
                    </div>
                </div>
            )
    }
}

export default Register;