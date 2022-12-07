import React from 'react';
import s from './dialogs.module.css'
import UserDialog from "./userDialog/userDialog";
import MessageItem from "./messageItem/messageItem";

const Dialogs = () => {
    return (
        <div className={s.content}>
            <div className={s.users_block}>
                <UserDialog name={'name1'} id={'1'}/>
                <UserDialog name={'name2'} id={'2'}/>
                <UserDialog name={'name3'} id={'3'}/>
                <UserDialog name={'name4'} id={'4'}/>
            </div>
            <div className={s.messages_block}>
                <MessageItem message={'Yo!!!!'} />
                <MessageItem message={'Yo bro!!!!'} />
                <MessageItem message={'What is your name???'} />
                <MessageItem message={'!!!!'} />
            </div>
        </div>
    );
};

export default Dialogs;