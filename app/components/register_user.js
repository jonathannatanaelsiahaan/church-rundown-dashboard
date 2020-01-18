import React from "react"
import style from "components/css/register.css"

class Register extends React.Component {
    constructor(props) {
        super(props)
    }

    onClickHandler(event) {
        event.preventDefault();

        const userNameDom = document.querySelector("#name")
        const accountUsernameDom = document.querySelector("#username")
        const accountPasswordDom = document.querySelector("#password")

        const data = {
            user: {
                name: userNameDom.value
            },
            account: {
                username: accountUsernameDom.value,
                password: accountPasswordDom.value
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
                    <h4>Acara Gereja Dashboard</h4>
                    <p>For The Last Step, Please Fill Your Account Data</p>
                    <div className={style.floatingLabel}>
                        <input placeholder="Name" type="text" name="name" id="name" autocomplete="off" />
                        <div className={style.icon}>
                        </div>
                    </div>
                    <div className={style.floatingLabel}>
                        <input placeholder="Username" type="text" name="username" id="username" autocomplete="off" />
                        <div className={style.icon}>
                        </div>
                    </div>
                    <div className={style.floatingLabel}>
                        <input placeholder="Password" type="password" name="password" id="password" autocomplete="off" />
                        <div className={style.icon}>
                        </div>
                    </div>
                    <button type="submit" onClick={this.onClickHandler.bind(this)} className={style.login}>Finish</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;