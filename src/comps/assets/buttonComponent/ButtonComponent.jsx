import { Button } from "antd";
import React from "react";

export const DefaultButtonComponent = ({text, styleName, handler}) => (
    <Button className={styleName} type="primary" danger onClick={handler}>
        {text}
    </Button>
)