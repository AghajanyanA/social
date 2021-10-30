import React from 'react'
import c from './Messages.module.css'
import TextMessage from './TextMessage/TextMessage'
import Dialog from './Dialog/Dialog'

const Messages = () => {
    return (
        <div className={c.wrapall}>
            <div className={c.messages}>
                <TextMessage msg='Hey' />
                <TextMessage msg='Yo' />
                <TextMessage msg='How are you?' />
                <TextMessage msg='Good thanks im on drive today!' />
                <TextMessage msg='Haha did you sniff the shit I suggested?' />
            </div>
            <div className={c.conversations}>
                <Dialog id='1' user='Andrew'/>
                <Dialog id='2' user='Bobby'/>
                <Dialog id='3' user='Sam'/>
                <Dialog id='4' user='Jeffrey'/>
                <Dialog id='5' user='Andromeda'/>
                <Dialog id='6' user='Diego'/>
            </div>
            
        </div>
    )
}

export default Messages