import React from 'react';
import s from './dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.content}>
            <div className={s.users_block}>
                <div className={s.active}>Name1</div>
                <div className={''}>Name2</div>
                <div className={''}>Name3</div>
                <div className={''}>Name4</div>
            </div>
            <div className={s.messages_block}>
                <div className={s.message}>message1</div>
                <div className={s.message}>message2</div>
                <div className={s.message}>message3</div>
            </div>
        </div>
    );
};

export default Dialogs;