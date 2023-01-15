import React from "react";
import PropTypes from "prop-types";

const Header = ({ phrase, bootstrapStyle }) => {
    return (
        <h1>
            <span className={bootstrapStyle}>{phrase}</span>
        </h1>
    );
};

Header.propTypes = {
    phrase: PropTypes.string.isRequired,
    bootstrapStyle: PropTypes.string.isRequired
};

export default Header;
