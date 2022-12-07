import React from 'react';
import s from './myPosts.module.css'
import Post from "./post/post";

const MyPosts = () => {
    return (
        <div className={s.wrapper}>
            <h3>My posts</h3>
            <div className={s.new_post__block}>
                <div>
                    <textarea className={s.new_post__block__textarea}></textarea>
                </div>
                <button>add post</button>
            </div>
            <Post message={'yo, dude!!!'} likesCount={35}/>
            <Post message={'what is your name?'} likesCount={7}/>
            <Post message={'I am fine....'} likesCount={2}/>
        </div>
    );
};

export default MyPosts;