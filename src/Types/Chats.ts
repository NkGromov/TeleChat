export type Chat = {
    chatId: number;
    companion: Companion;
};
export type Companion = {
    user_id: number;
    username: string;
    avatar: null | string;
};
