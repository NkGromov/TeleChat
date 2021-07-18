import { all } from "redux-saga/effects";
import { authWatcher } from "./AuthSaga";
import { chatsWatcher } from "./ChatsSaga";
import { UserWatcher } from "./UserSaga";
export function* rooWathcer() {
    yield all([authWatcher(), chatsWatcher(), UserWatcher()]);
}
