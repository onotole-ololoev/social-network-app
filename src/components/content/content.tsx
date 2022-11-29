import React from 'react';
import s from './content.module.css';

const Content = () => {
    return (
        <div className={s.content}>
            Content
            <div>
                <img src="#" alt="wallpaper profile"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my post
                <div>
                    new post
                </div>
                <div>
                    <div>post1</div>
                    <div>post2</div>
                    <div>post3</div>
                </div>
            </div>
        </div>
    );
};

export default Content;