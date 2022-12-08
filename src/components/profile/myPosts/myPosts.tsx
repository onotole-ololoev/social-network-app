import React from 'react';
import s from './myPosts.module.css'
import Post from "./post/post";

const MyPosts = () => {

    let dataPosts = [
        {id: 1, message: "Yo my friend", likesCount: 34},
        {id: 2, message: "Yo miend", likesCount: 34},
        {id: 3, message: "Yo m.......y friend", likesCount: 34},
        {id: 4, message: "Yo my fr!!!!!!!!!!!!!d", likesCount: 34}
    ]

    return (
        <div className={s.wrapper}>
            <h3>My posts</h3>
            <div className={s.new_post__block}>
                <div>
                    <textarea className={s.new_post__block__textarea}></textarea>
                </div>
                <button>add post</button>
            </div>
            {dataPosts.map(p => {
                return (
                    <Post message={p.message} likesCount={p.likesCount} key={p.id}/>
                )
            })}
        </div>
    );
};

export default MyPosts;