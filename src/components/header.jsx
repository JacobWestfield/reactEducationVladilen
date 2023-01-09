import React from "react";


const Header = ({phrase, bootstrapStyle}) => {
    
    return <h1><span className={bootstrapStyle}>{phrase}</span></h1>

}


export default Header;