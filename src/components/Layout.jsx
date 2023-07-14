import React from "react";
import PropTypes from "prop-types";

function Layout({children}){
    return (
    <div className="bg-blue-100 w-screen h-screen">
        {children}
    </div>
    )
}

export default Layout;

Layout.propTypes = {
    children:PropTypes.element.isRequired
}