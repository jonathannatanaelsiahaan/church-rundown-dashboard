import React from "react"
import Sidebar from "components/sidebar"

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        if(sessionStorage.getItem("data") == null) {
            window.location.replace("/login");
        }
    }

    render() {
        return (
            <div>
                <Sidebar/>
            </div>
        )
    }
}

export default Dashboard;