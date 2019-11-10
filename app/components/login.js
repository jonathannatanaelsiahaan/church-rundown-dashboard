import React from "react"
import style from "components/login.css"

class Login extends React.Component {
    render() {
        return (
            <div className={ style.container }>
                <div className={ style.username } />
                <div className={ style.password } />
                <button>Login</button>
            </div>
        )
    }
}

export default Login;