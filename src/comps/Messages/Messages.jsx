import React from 'react'
import c from './Messages.module.css'
import TextMessage from './TextMessage/TextMessage'
import Dialog from './Dialog/Dialog'
import { Button } from 'antd';

const Messages = ({state, dispatch}) => {

    let dialogElements = state.dialogData.map(users => <Dialog state={users} />)
    let textMessageElements = state.textMessageData.map( message => <TextMessage msg={message.msg} />)

    let messagePost = React.createRef()


    let handleOnChange = (e) => {
        let text = e.target.value
        dispatch({type: 'WRITE-PRIVATE-MESSAGE', message: text})
    }
    let handeSendPM = () => {
        if(state.messageTextareaControl.trim() !== ''){
        dispatch({type: 'SEND-PRIVATE-MESSAGE'})
    } else {dispatch({type: 'CLEAR-PM-TEXTFIELD'})}
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
                    ref={messagePost} 
                    onChange={handleOnChange} 
                    cols="7000" rows="3" 
                    placeholder='Enter message' 
                    spellCheck='true'></textarea>
                    <Button className={c.button} onClick={handeSendPM}>Send</Button>
                </div>
            </div>
        </div>
    )
}

export default Messages