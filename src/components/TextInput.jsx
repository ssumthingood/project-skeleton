import React from "react";
import PropTypes from "prop-types";

function TextInput({type, change}){
    return (
    <input type={type} onChange={change} className="w-full h-6"/>
    )
}

export default TextInput;

TextInput.propTypes = {
    type:PropTypes.string.isRequired,
    change:PropTypes.func.isRequired
}