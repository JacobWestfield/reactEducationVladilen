import React from "react";


const Button = ({deletion}) => {
    return <button onClick={deletion} type="button" className="btn btn-danger">DELETE</button>
}

export default Button;