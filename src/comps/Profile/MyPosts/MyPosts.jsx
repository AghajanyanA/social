import React from 'react';
import Post from './Post/Post';
import { Button } from 'antd';
import './MyPosts.module.css';
import { handlePostActionCreator, updatePostTextActionCreator } from '../../../redux/state';

export default function MyPosts({state, dispatch}) {

    let postElements = state.profilePage.postData.map(el => <Post id={el.id} name={el.name} message={el.message} likesCount={el.likesCount} avatarURL={el.avatarURL} dispatch={dispatch}/>)
    let statusPost = React.createRef()
    let handlePost = () => {
        if (statusPost.current.value.trim() !== '') {
            let userName, value, avaURL;
            userName = state.header.userName
            value = statusPost.current.value
            avaURL = state.header.avatarURL

            dispatch(handlePostActionCreator(userName, value, avaURL))
            statusPost.current.value = ''
        } else {statusPost.current.value = ''}
    }
    let textareaChange = () => {
        let text = statusPost.current.value 
        dispatch(updatePostTextActionCreator(text))
    }

    return (
        <div>
            <div className='newStatus'>
                <div><textarea ref={statusPost} cols="100" rows="3.2" placeholder="Whats on your mind?" value={state.profilePage.textareaControl} onChange={textareaChange}></textarea>
                <Button type="primary" onClick={handlePost}>Send</Button>
                </div>
            </div>
                {postElements}                       
        </div>
    )
}
