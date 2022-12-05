import React from 'react';
import {PostType} from "../../../../types/types";

const Post = (props: PostType) => {
    return (
        <div>
            <div>
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="avatar" style={{width: '30px'}}/>
                <span>{props.message}</span>
            </div>
            <div>
                <span>likes: {props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post;