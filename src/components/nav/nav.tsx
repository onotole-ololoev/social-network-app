import React from 'react';
import s from './nav.module.css';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.navigation}>
            <div className={''}>
                <Link to="/profile">Profile</Link>
            </div>
            <div className={''}>
                <Link to="/dialogs">Dialogs</Link>
            </div>
            <div className={''}>
                <Link to="/news">News</Link>
            </div>
            <div className={''}>
                <Link to="/music">Music</Link>
            </div>
            <div className={''}>
                <Link to="/settings">Settings</Link>
            </div>
        </nav>
    );
};

export default Nav;