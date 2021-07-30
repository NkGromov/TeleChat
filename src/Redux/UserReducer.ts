import { Companion } from "../Types/Chats";
import { AuthErrors, ErrorsObject } from "../Types/Errors";
import { ThemeKey } from "../Types/Themes";
import { User } from "../Types/User";
import { InferActionsTypes } from "./store";

const initialState = {
    user: {} as User,
    isAuth: false,
    isFetching: false,
    findUsers: [] as Companion[],
    errors: {} as AuthErrors,
};

export type initialStateDraw = typeof initialState;

const UserReducer = (state = initialState, action: ActionsTypes): initialStateDraw => {
    switch (action.type) {
        case "USER_SET":
            return { ...state, user: action.user };
        case "USER_SET_AUTH":
            return { ...state, isAuth: action.auth };
        case "USER_SET_FETCH":
            return { ...state, isFetching: action.isFetch };
        case "USER_INIT_THEME":
            return { ...state, user: { ...state.user, theme_color: action.theme } };
        case "USER_SET_FIND_USERS":
            return { ...state, findUsers: action.users };
        case "USER_SET_ERROR":
            return { ...state, errors: { ...state.errors, registration: action.registration, login: action.login } };
        default:
            return state;
    }
};
export type ActionsTypes = InferActionsTypes<typeof UserActions>;
export const UserActions = {
    setUser: (user: User) => ({ type: "USER_SET", user } as const),
    setFindUsers: (users: Companion[]) => ({ type: "USER_SET_FIND_USERS", users } as const),
    setAuth: (auth: boolean) => ({ type: "USER_SET_AUTH", auth } as const),
    setFetch: (isFetch: boolean) => ({ type: "USER_SET_FETCH", isFetch } as const),
    login: (username: string, password: string) => ({ type: "USER_LOGIN", username, password } as const),
    auth: () => ({ type: "USER_AUTH" } as const),
    registration: (username: string, password: string, passwordTwo: string) => ({ type: "USER_REGISTRATION", username, password, passwordTwo } as const),
    changeTheme: (theme: ThemeKey) => ({ type: "USER_SET_THEME", theme } as const),
    initTheme: (theme: ThemeKey) => ({ type: "USER_INIT_THEME", theme } as const),
    setErrors: (registration: ErrorsObject | null, login: ErrorsObject | null) => ({ type: "USER_SET_ERROR", registration, login } as const),
    findUsers: (name: string) => ({ type: "USER_FIND_OTHER_USERS", name } as const),
    logout: () => ({ type: "USER_LOGOUT" } as const),
};
export default UserReducer;
