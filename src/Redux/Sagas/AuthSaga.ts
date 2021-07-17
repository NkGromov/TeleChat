import { call, put, takeEvery } from "redux-saga/effects";
import AuthApi from "../../Api/Services/AuthApi";
import { UserActions } from "../UserReducer";
type login = ReturnType<typeof UserActions.login>;
type registration = ReturnType<typeof UserActions.registration>;

function* login({ username, password }: login) {
    const { user, accesToken } = yield call(AuthApi.login, username, password);
    localStorage.setItem("token", accesToken);
    yield put(UserActions.setUser(user));
    yield put(UserActions.setAuth(true));
}
function* registration({ username, password, passwordTwo }: registration) {
    const { user, accesToken } = yield call(AuthApi.registration, username, password, passwordTwo);
    localStorage.setItem("token", accesToken);
    yield put(UserActions.setUser(user));
    yield put(UserActions.setAuth(true));
}

function* auth() {
    const { user, accesToken } = yield call(AuthApi.chekAuth);
    localStorage.setItem("token", accesToken);
    yield put(UserActions.setUser(user));
    yield put(UserActions.setAuth(true));
}
export function* authWatcher() {
    yield takeEvery("USER_LOGIN", login);
    yield takeEvery("USER_REGISTRATION", registration);
    yield takeEvery("USER_AUTH", auth);
}
