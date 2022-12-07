import React from 'react';
import s from './profile.module.css';
import MyPosts from "./myPosts/myPosts";
import ProfileInfo from "./profileInfo/profileInfo";

const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
};

export default Profile;