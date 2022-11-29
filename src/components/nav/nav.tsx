import React from 'react';
import s from './nav.module.css';

const Nav = () => {
    return (
        <div className={s.navigation}>
            Nav
            <div>my profile</div>
            <div>messages</div>
            <div>music</div>
        </div>
    );
};

export default Nav;