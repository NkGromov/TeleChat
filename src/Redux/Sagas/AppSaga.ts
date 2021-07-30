import { all, call, put, takeEvery } from "redux-saga/effects";
import { AppActions } from "../AppReducer";
import { auth } from "./AuthSaga";

function* initializ() {
    yield all({
        authUser: call(auth),
    });
    yield put(AppActions.setInit(true));
}

export function* appWatcher() {
    yield takeEvery("APP_INIT", initializ);
}
