import React from 'react';
import Post from "./post/post";

const MyPosts = () => {
    return (
        <div>
            <div>
                <div>
                    <textarea></textarea>
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