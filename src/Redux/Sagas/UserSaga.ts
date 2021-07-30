import { call, put, takeEvery } from "redux-saga/effects";
import UserApi from "../../Api/Services/UserApi";
import { Companion } from "../../Types/Chats";
import { UserActions } from "../UserReducer";
type theme = ReturnType<typeof UserActions.changeTheme>;
type find = ReturnType<typeof UserActions.findUsers>;

function* theme({ theme }: theme) {
    const { user } = yield call(UserApi.theme, theme);
    localStorage.setItem("theme", user.theme_color);
    yield put(UserActions.setUser(user));
}
function* findUsers({ name }: find) {
    const data: Companion[] = yield call(UserApi.findUsers, name);
    yield put(UserActions.setFindUsers(data));
}

export function* userWatcher() {
    yield takeEvery("USER_SET_THEME", theme);
    yield takeEvery("USER_FIND_OTHER_USERS", findUsers);
}
