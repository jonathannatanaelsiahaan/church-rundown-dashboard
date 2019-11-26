import React from "react"
import style from "components/css/login.css"
import AuthUsecase from "usecase/auth_usecase"

class Login extends React.Component {
    onClickHandler(event) {
        event.preventDefault();
        
        const accountUsernameDom = document.querySelector("#username")
        const accountPasswordDom = document.querySelector("#password")

        const authData = {
            username: accountUsernameDom.value,
            password: accountPasswordDom.value
        }

        const authUsecase = new AuthUsecase()
        authUsecase.login(authData)
    }

    render() {
        return (
            <div className={style.container}>
                <div className={style.session}>
                    <div className={style.left}>     
                    </div>
                    <form action="" className={style.logIn} autocomplete="off"> 
                    <h4>Church Rundown Dashboard</h4>
                    <p>Welcome back! Log in to your account to create your own rundown</p>
                    <div className={style.floatingLabel}>
                        <input placeholder="Username" type="text" name="username" id="username" autocomplete="off"/>
                        <div className={style.icon}>
                        </div>
                    </div>
                    <div className={style.floatingLabel}>
                        <input placeholder="Password" type="password" name="password" id="password" autocomplete="off"/>
                        <div className={style.icon}>
                        </div>
                    </div>
                    <button type="submit" onClick={this.onClickHandler} className={style.login}>Log in</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;