import React from "react";
import PropTypes from "prop-types";

const Button = ({ deletion }) => {
    return (
        <button onClick={deletion} type="button" className="btn btn-danger">
            DELETE
        </button>
    );
};

Button.propTypes = {
    deletion: PropTypes.func.isRequired
};

export default Button;
