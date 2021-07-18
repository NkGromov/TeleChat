import { Chat } from "../Types/Chats";
import { InferActionsTypes } from "./store";

const initialState = {
    chats: [] as Chat[],
    chatIdIsActive: null as null | number,
};

export type initialStateDraw = typeof initialState;

const ChatsReducer = (state = initialState, action: ActionsTypes): initialStateDraw => {
    switch (action.type) {
        case "CHATS_SET":
            return { ...state, chats: action.chats };
        case "CHATS_SET_ACTIVE":
            return { ...state, chatIdIsActive: action.chatId };
        default:
            return state;
    }
};
export type ActionsTypes = InferActionsTypes<typeof ChatActions>;
export const ChatActions = {
    setChats: (chats: Chat[]) => ({ type: "CHATS_SET", chats } as const),
    chats: () => ({ type: "CHATS_GET" } as const),
    setActiveChat: (chatId: number) => ({ type: "CHATS_SET_ACTIVE", chatId } as const),
};
export default ChatsReducer;
