import { call, put, takeEvery } from "redux-saga/effects";
import ChatsApi from "../../Api/Services/ChatsApi";
import { Chat } from "../../Types/Chats";
import { ChatActions } from "../ChatsReducer";

function* getChats() {
    const data: Chat[] = yield call(ChatsApi.getChats);
    yield put(ChatActions.setChats(data));
}

export function* chatsWatcher() {
    yield takeEvery("CHATS_GET", getChats);
}
