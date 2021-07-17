import { all } from "redux-saga/effects";
import { authWatcher } from "./AuthSaga";
import { chatsWatcher } from "./ChatsSaga";
export function* rooWathcer() {
    yield all([authWatcher(), chatsWatcher()]);
}
