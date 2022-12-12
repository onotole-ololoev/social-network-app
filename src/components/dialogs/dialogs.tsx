import React from 'react';
import s from './dialogs.module.css'
import UserDialog from "./userDialog/userDialog";
import MessageItem from "./messageItem/messageItem";
import {DialogsPageType} from "../../types/types";

const Dialogs = (props: DialogsPageType) => {

    // let userDialogData = [
    //     {id: 1, name: "Oleg"},
    //     {id: 2, name: "Viktor"},
    //     {id: 3, name: "Onotole"}
    // ]
    // let messageItemData = [
    //     {id: 1, message: "What is your name???"},
    //     {id: 2, message: "What  name???"},
    //     {id: 3, message: "What is your /////////"},
    //     {id: 4, message: "some some  name???"},
    //     {id: 5, message: "..........your name???"},
    // ]

    return (
        <div className={s.content}>
            <div className={s.users_block}>
                {props.userDialogData.map(el => <UserDialog name={el.name} id={el.id} key={el.id}/>)}
            </div>
            <div className={s.messages_block}>
                {props.messageItemData.map(el => <MessageItem id={el.id} message={el.message} key={el.id}/>)}
            </div>
        </div>
    );
};

export default Dialogs;