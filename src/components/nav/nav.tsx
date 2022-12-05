import React from 'react';
import s from './nav.module.css';

const Nav = () => {
    return (
        <div className={s.navigation}>
            <div>my profile</div>
            <div>messages</div>
            <div>music</div>
        </div>
    );
};

export default Nav;