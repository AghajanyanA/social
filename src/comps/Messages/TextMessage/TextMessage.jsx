import React from "react";
import c from './TextMessage.module.css'

const TextMessage = ({msg}) => {

    return (
    <div className={c.message}>{msg}</div>
    )
}

export default TextMessage