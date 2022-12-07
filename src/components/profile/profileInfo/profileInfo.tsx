import React from 'react';
import s from './profileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.main_photo} src="https://phonoteka.org/uploads/posts/2022-02/1645366635_1-phonoteka-org-p-uzkii-fon-2.jpg" alt="wallpaper profile"/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;