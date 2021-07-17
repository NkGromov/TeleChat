import { Chat } from "../Types/Chats";
import { InferActionsTypes } from "./store";

const initialState = {
    chats: [] as Chat[],
};

export type initialStateDraw = typeof initialState;

const ChatsReducer = (state = initialState, action: ActionsTypes): initialStateDraw => {
    switch (action.type) {
        case "CHATS_SET":
            return { ...state, chats: action.chats };
        default:
            return state;
    }
};
export type ActionsTypes = InferActionsTypes<typeof ChatActions>;
export const ChatActions = {
    setChats: (chats: Chat[]) => ({ type: "CHATS_SET", chats } as const),
    chats: () => ({ type: "CHATS_GET" } as const),
};
export default ChatsReducer;
