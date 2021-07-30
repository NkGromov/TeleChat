import { Chat, isActiveChat, Messages } from "../Types/Chats";
import { InferActionsTypes } from "./store";

const initialState = {
    chats: [] as Chat[],
    chatIdIsActive: null as null | isActiveChat,
};

export type initialStateDraw = typeof initialState;

const ChatsReducer = (state = initialState, action: ActionsTypes): initialStateDraw => {
    switch (action.type) {
        case "CHATS_SET":
            return { ...state, chats: action.chats };
        case "CHATS_SET_ACTIVE":
            if (!action.chat) return { ...state, chatIdIsActive: null };
            const chat = state.chats.find((el) => el.chatId === action.chat?.id);
            const messages = chat?.messages || [];
            return { ...state, chatIdIsActive: { ...state.chatIdIsActive, id: action.chat.id, companionId: action.chat.companionId, name: action.chat.name, messages: messages } };
        case "CHATS_SET_NEW_MESSAGES":
            const newState: initialStateDraw = JSON.parse(JSON.stringify(state));
            const index = newState.chats.findIndex((el) => el.chatId === action.chatId);
            if (index !== -1) {
                newState.chats[index].messages = action.messages;
                newState.chats[index].notifications = action.notifications;
            }
            if (newState.chatIdIsActive && newState.chatIdIsActive.id === action.chatId) newState.chatIdIsActive.messages = action.messages;
            return newState;
        case "CHATS_SET_NEW_STATUS":
            const indexStatus = state.chats.findIndex((el) => el.chatId === action.chatId);
            const newChats: Chat[] = JSON.parse(JSON.stringify(state.chats));
            newChats[indexStatus].notifications = action.notifications;
            return { ...state, chats: newChats };
        default:
            return state;
    }
};
export type ActionsTypes = InferActionsTypes<typeof ChatActions>;
export const ChatActions = {
    setChats: (chats: Chat[]) => ({ type: "CHATS_SET", chats } as const),
    chats: () => ({ type: "CHATS_GET" } as const),
    setActiveChat: (chat: isActiveChat | null) => ({ type: "CHATS_SET_ACTIVE", chat } as const),
    setNewMessages: (chatId: number, messages: Messages[], notifications: number) => ({ type: "CHATS_SET_NEW_MESSAGES", messages, chatId, notifications } as const),
    setNewStatus: (chatId: number, notifications: number) => ({ type: "CHATS_SET_NEW_STATUS", chatId, notifications } as const),
};
export default ChatsReducer;
