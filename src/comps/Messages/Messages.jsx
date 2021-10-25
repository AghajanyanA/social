import React from 'react'
import c from './Messages.module.css'

const Messages = () => {
    return (
        <div className={c.wrapall}>
            <div className={c.messages}>
                <div className={c.message}>Hey</div>
                <div className={c.message}>Yo</div>
                <div className={c.message}>How are you?</div>
                <div className={c.message}>Good thanks im on drive today!</div>
                <div className={c.message}>Haha did you read the book I suggested?</div>
            </div>
            <div className={c.conversations}>
                <div className={c.dialog + ' ' + c.active}>Andrew</div>
                <div className={c.dialog}>Bobby</div>
                <div className={c.dialog}>Sam</div>
                <div className={c.dialog}>Jeffrey</div>
                <div className={c.dialog}>Andromeda</div>
                <div className={c.dialog}>Diego</div>
            </div>
            
        </div>
    )
}

export default Messages