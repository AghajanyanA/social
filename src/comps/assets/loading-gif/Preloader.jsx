import React from "react";
import preloader1 from './preloader1.svg'
import c from './preloader.module.css'

const Preloader = (props) => {
    return <>
        <img src={preloader1} className={c.preloader} alt=" " />
    </>
}

export default Preloader