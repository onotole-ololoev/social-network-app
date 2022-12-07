import React from 'react';
import {Link} from "react-router-dom";
import {UserDialogType} from "../../../types/types";


const UserDialog = (props: UserDialogType) => {
    return (
        <div>
            <div className={''}>
                <Link to={`/dialogs/${props.id}`}>{props.name}</Link>
            </div>
        </div>
    );
};

export default UserDialog;