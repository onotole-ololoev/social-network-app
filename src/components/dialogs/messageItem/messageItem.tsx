import React from 'react';
import {MessageItemType} from "../../../types/types";

const MessageItem = (props: MessageItemType) => {
    return (
        <div>
            <div>{props.message}</div>
        </div>
    );
};

export default MessageItem;