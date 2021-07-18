import { call, put, takeEvery } from "redux-saga/effects";
import UserApi from "../../Api/Services/UserApi";
import { UserActions } from "../UserReducer";
type theme = ReturnType<typeof UserActions.changeTheme>;

function* theme({ theme }: theme) {
    const { user } = yield call(UserApi.theme, theme);
    yield put(UserActions.setUser(user));
}

export function* UserWatcher() {
    yield takeEvery("USER_SET_THEME", theme);
}
