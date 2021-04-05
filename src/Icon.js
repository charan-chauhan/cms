import React from "react";
import { render } from "react-dom";

// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

// create our App

function Icon(){
    return(
        <div><FontAwesomeIcon icon={faFacebook} size="5x" color="yellow" /></div>
    )
}

export default Icon;