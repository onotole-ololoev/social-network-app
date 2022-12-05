import React from 'react';
import s from './profile.module.css';
import MyPosts from "./myPosts/myPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            Profile
            <div>
                <img src="#" alt="wallpaper profile"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
};

export default Profile;