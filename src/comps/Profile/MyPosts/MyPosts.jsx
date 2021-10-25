import React from 'react';
import Post from './Post/Post';
import { Button } from 'antd';
import './MyPosts.module.css';

export default function MyPosts() {
    return (
        <div>
            <div>Status bar
                <div><textarea name="New Post" cols="100" rows="3.2" placeholder="Whats on your mind?"></textarea>
                <Button>Default Button</Button>
                </div>
            </div>
            <Post name='James' message='Cool pic man'/>
            <Post name='Anthony' message='You look gr8'/>
            <Post name='Jessica' message='WHOS THAT BITCH BEHIND YOU'/>
        </div>
    )
}
