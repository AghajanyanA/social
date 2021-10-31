import React from 'react'
import c from './Messages.module.css'
import TextMessage from './TextMessage/TextMessage'
import Dialog from './Dialog/Dialog'

const Messages = () => {

    let textMessageData = [
        {id:1, msg:'Hey'},
        {id:2, msg:'Yo'},
        {id:3, msg:'How are you?'},
        {id:4, msg:'Good thanks im on drive today!'},
        {id:5, msg:'Haha did you sniff the shit I suggested?'}
    ]

    let dialogData = [
        {id:1, user:'Andrew'},
        {id:2, user:'Bobby'},
        {id:3, user:'Sam'},
        {id:4, user:'Jeffrey'},
        {id:5, user:'Andromeda'},
        {id:6, user:'Diego'}
    ]

    let textMessageElements = textMessageData.map( m => <TextMessage msg={m.msg} />)
    let dialogElements = dialogData.map(dUsers => <Dialog id={dUsers.id} user={dUsers.user} />)

    return (
        <div className={c.wrapall}>
            <div className={c.messages}>
                { textMessageElements }
            </div>
            <div className={c.conversations}>
                { dialogElements }
            </div>
        </div>
    )
}

export default Messages