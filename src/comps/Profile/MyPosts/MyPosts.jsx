import React from 'react';
import Post from './Post/Post';
import { Button } from 'antd';
import './MyPosts.module.css';

export default function MyPosts() {
    let postData = [
        {id: 1, name: 'James', message:'Cool pic man'},
        {id: 2, name: 'Anthony', message:'You look gr8'},
        {id: 3, name: 'Jessica', message:'WHOS THAT BITCH BEHIND YOU'}
    ]

    return (
        <div>
            <div>Status bar
                <div><textarea name="New Post" cols="100" rows="3.2" placeholder="Whats on your mind?"></textarea>
                <Button type="primary">Default Button</Button>
                </div>
            </div>
            <Post name={postData[0].name} message={postData[0].message}/>
            <Post name={postData[1].name} message={postData[1].message}/>
            <Post name={postData[2].name} message={postData[2].message}/>
        </div>
    )
}
