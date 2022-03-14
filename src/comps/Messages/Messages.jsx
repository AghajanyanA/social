import React from 'react'
import c from './Messages.module.css'
import TextMessage from './TextMessage/TextMessage'
import Dialog from './Dialog/Dialog'
import { Button } from 'antd';

const Messages = ({messageTextareaControl, dialogData, textMessageData, handleOnChange, handleSendPM, clearTextarea}) => {

    
    const dialogElements = dialogData.map(users => <Dialog key={users.id} users={users} />)
    const textMessageElements = textMessageData.map(message => <TextMessage key={message.id} msg={message.msg} />)


    const onChange = (e) => {
        const text = e.target.value
        handleOnChange(text)
    }
    const onSendPM = () => {
        if(messageTextareaControl.trim() !== ''){
            handleSendPM()
    } else {clearTextarea()}
}
    const handleSendByEnterKey = e => {
        if ((e.key === 'Enter' && e.shiftKey) && (messageTextareaControl.trim() !== '')) {
            handleSendPM()
            clearTextarea()
            e.preventDefault()
        }
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
                    value={messageTextareaControl} 
                    onChange={onChange}
                    onKeyPress={handleSendByEnterKey} 
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