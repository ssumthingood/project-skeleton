import React from "react";
import PropTypes from "prop-types";

function LoginForm({type, change}){
    return (
    <form>
        hello
    </form>
    )
}

export default LoginForm;

LoginForm.propTypes = {
    type:PropTypes.string.isRequired,
    change:PropTypes.func.isRequired
}