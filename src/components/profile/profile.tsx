import React from 'react';
import s from './profile.module.css';
import MyPosts from "./myPosts/myPosts";
import ProfileInfo from "./profileInfo/profileInfo";
import {ProfilePageType} from "../../types/types";

const Profile = (props: ProfilePageType) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts dataPosts={props.dataPosts}/>
        </div>
    );
};

export default Profile;