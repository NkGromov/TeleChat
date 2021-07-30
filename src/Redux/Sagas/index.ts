import { all } from "redux-saga/effects";
import { appWatcher } from "./AppSaga";
import { authWatcher } from "./AuthSaga";
import { chatsWatcher } from "./ChatsSaga";
import { userWatcher } from "./UserSaga";
export function* rooWathcer() {
    yield all([authWatcher(), chatsWatcher(), userWatcher(), appWatcher()]);
}
