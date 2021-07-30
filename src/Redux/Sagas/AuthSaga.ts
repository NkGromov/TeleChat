import { call, put, takeEvery } from "redux-saga/effects";
import AuthApi from "../../Api/Services/AuthApi";
import { UserActions } from "../UserReducer";
type login = ReturnType<typeof UserActions.login>;
type registration = ReturnType<typeof UserActions.registration>;

function* login({ username, password }: login) {
    try {
        const { user, accesToken } = yield call(AuthApi.login, username, password);
        localStorage.setItem("token", accesToken);
        yield put(UserActions.setUser(user));
        yield put(UserActions.setAuth(true));
    } catch (e) {
        yield put(UserActions.setErrors(null, { message: e.response.data.message, errors: [] }));
        console.log(e);
    }
}
function* registration({ username, password, passwordTwo }: registration) {
    try {
        const { user, accesToken } = yield call(AuthApi.registration, username, password, passwordTwo);
        localStorage.setItem("token", accesToken);
        yield put(UserActions.setUser(user));
        yield put(UserActions.setAuth(true));
    } catch (e) {
        yield put(UserActions.setErrors({ message: e.response.data.message, errors: [] }, null));
        console.log(e);
    }
}

export function* auth() {
    try {
        if (!localStorage.getItem("token")) return;
        const { user, accesToken } = yield call(AuthApi.chekAuth);
        localStorage.setItem("token", accesToken);
        yield put(UserActions.setUser(user));
        yield put(UserActions.setAuth(true));
    } catch (e) {
        console.log(e);
    }
}
function* logut() {
    yield call(AuthApi.logout);
    localStorage.removeItem("token");
    yield put(UserActions.setAuth(false));
}
export function* authWatcher() {
    yield takeEvery("USER_LOGIN", login);
    yield takeEvery("USER_REGISTRATION", registration);
    yield takeEvery("USER_AUTH", auth);
    yield takeEvery("USER_LOGOUT", logut);
}
