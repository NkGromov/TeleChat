export type Chat = {
    chatId: number;
    companion: Companion;
    messages: Messages[];
    notifications: number;
};
export type isActiveChat = {
    id: number;
    companionId: number;
    name: string;
    messages?: Messages[];
};

export type Companion = {
    user_id: number;
    username: string;
    avatar: null | string;
};
export type Messages = {
    id: number;
    user_id: number;
    message: string;
    date: string;
};
