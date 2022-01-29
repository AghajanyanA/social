import React from 'react'
import c from './Messages.module.css'
import TextMessage from './TextMessage/TextMessage'
import Dialog from './Dialog/Dialog'
import { Button } from 'antd';

const Messages = ({state, handleOnChange, handleSendPM, handleElseSendPM}) => {
    const dialogElements = state.dialogData.map(users => <Dialog key={users.id} state={users} />)
    const textMessageElements = state.textMessageData.map(message => <TextMessage key={message.id} msg={message.msg} />)


    const onChange = (e) => {
        const text = e.target.value
        handleOnChange(text)
    }
    const onSendPM = () => {
        if(state.messageTextareaControl.trim() !== ''){
            handleSendPM()
    } else {handleElseSendPM()}
}
    
    return (
        <div className={c.wrapall}>
            <div className={c.conversations}>
                { dialogElements }
            </div>
            <div className={c.messages}>
                { textMessageElements }
                <div className={c.textarea}>
                    <textarea className={c.textarea} 
                    value={state.messageTextareaControl} 
                    onChange={onChange} 
                    cols="7000" rows="3" 
                    placeholder='Enter message' 
                    spellCheck='true'></textarea>
                    <Button className={c.button} onClick={onSendPM}>Send</Button>
                </div>
            </div>
        </div>
    )
}

export default Messages