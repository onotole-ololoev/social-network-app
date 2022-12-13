import React from 'react';
import s from './myPosts.module.css'
import Post from "./post/post";
import {ProfilePageType, RefTextareaType} from "../../../types/types";

const MyPosts = (props: ProfilePageType) => {
    console.log(props.dataPosts)
    // let dataPosts = [
    //     {id: 1, message: "Yo my friend", likesCount: 34},
    //     {id: 2, message: "Yo miend", likesCount: 34},
    //     {id: 3, message: "Yo m.......y friend", likesCount: 34},
    //     {id: 4, message: "Yo my fr!!!!!!!!!!!!!d", likesCount: 34}
    // ]
    let addPost = () => {
        let text = textarea.current?.value
        alert(text)
    }

    let textarea = React.createRef<HTMLTextAreaElement>()

    return (
        <div className={s.wrapper}>
            <h3>My posts</h3>
            <div className={s.new_post__block}>
                <div>
                    <textarea ref={textarea} className={s.new_post__block__textarea}></textarea>
                </div>
                <button onClick={addPost}>add post</button>
            </div>
            {props.dataPosts.map(p => {
                return (
                    <Post id={p.id} message={p.message} likesCount={p.likesCount} key={p.id}/>
                )
            })}
        </div>
    );
};

export default MyPosts;