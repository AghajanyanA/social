import { Button } from "antd";
import React from "react";
import c from "./ButtonComponent.module.css"

export const DefaultButtonComponent = ({text, styleName = c.defaultBTN, handler, type = "primary", title}) => (
    <Button className={styleName} type={type} danger onClick={handler} title={title} >
        {text}
    </Button>
)