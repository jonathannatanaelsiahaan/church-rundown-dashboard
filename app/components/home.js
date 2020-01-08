import React from "react"

class Home extends React.Component {
    constructor(props) {
        super(props);

        const session = localStorage.getItem("data");

        if(session != null) {
            window.location.replace("/dashboard");
        } else {
            window.location.replace("/home");
        }
    }
}

export default Home;