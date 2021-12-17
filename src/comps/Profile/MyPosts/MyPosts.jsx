import React from 'react';
import Post from './Post/Post';
import { Button } from 'antd';
import './MyPosts.module.css';

export default function MyPosts({ state, textareaChange, handlePost, postCompContainer, userName, currentTextarea, avaURL }) {

    let postElements = state.postData.map(el => <Post id={el.id} name={el.name} message={el.message} likesCount={el.likesCount} avatarURL={el.avatarURL} postCompContainer={postCompContainer} />)

    let onTextareaChange = (e) => {
        let text = e.target.value
        textareaChange(text)
    }

    let onHandlePost = () => {
        handlePost({userName, currentTextarea, avaURL})
    }

    return (
        <div>
            <div className='newStatus'>
                <div><textarea cols="100" rows="3.2" placeholder="Whats on your mind?" value={state.textareaControl} onChange={onTextareaChange}></textarea>
                    <Button type="primary" onClick={onHandlePost}>Send</Button>
                </div>
            </div>
            {postElements}
        </div>
    )
}
