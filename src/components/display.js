import React from "react";


class Display extends React.Component {


    notice(jso) {
        let string = "<p>" + jso + "Fakturor har uppdaterats.</p>";

        this.props.toastMessage = string;
    }

    test() {
        console.log("workin");
    }


    render() {
        return(
            <button onClick={()=> this.notice(this.props.data).bind(this)}>Klicka på mig</button>
            );
        }
    }

export default Display;
