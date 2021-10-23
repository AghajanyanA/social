import React from 'react';
import Post from './Post/Post';
import { Button } from 'antd';
import './MyPosts.module.css';

export default function MyPosts() {
    return (
        <div>
            <div>Status bar
                <div><textarea name="New Post" cols="100" rows="5"></textarea>
                <Button>Default Button</Button>
                </div>
            </div>
            <Post />
            <Post />
            <Post />
        </div>
    )
}
