export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

export type DialogsPageType = {
    userDialogData: UserDialogType[]
    messageItemData: MessageItemType[]
}
export type ProfilePageType = {
    dataPosts: PostType[]
}


export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type UserDialogType = {
    name: string
    id: number
}

export type MessageItemType = {
    id: number
    message: string
}


