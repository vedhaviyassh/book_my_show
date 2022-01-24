import React from "react";
import {Route} from "react-router-dom";

//import
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({component: Component , ...rest}) => {
    return(
        <>
        <Route
        {...rest}
        component = {(props) =>(
        <DefaultLayout>
            <Component {...props} />
        </DefaultLayout>
        )
        }
        />
        </>
    );
};

export default DefaultHOC;

//temp.js-> default Layout-> Default HOC-> App.js-> Index.js