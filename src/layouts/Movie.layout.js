import React from "react";

//Components
import Navbar from "../components/Navbar/navbar.component.js";


const MovieLayout = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    );
};

export default MovieLayout;
