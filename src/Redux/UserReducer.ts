import { ThemeKey } from "../Types/Themes";
import { User } from "../Types/User";
import { InferActionsTypes } from "./store";

const initialState = {
    user: {} as User,
    isAuth: false,
    isFetching: false,
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

        default:
            return state;
    }
};
export type ActionsTypes = InferActionsTypes<typeof UserActions>;
export const UserActions = {
    setUser: (user: User) => ({ type: "USER_SET", user } as const),
    setAuth: (auth: boolean) => ({ type: "USER_SET_AUTH", auth } as const),
    setFetch: (isFetch: boolean) => ({ type: "USER_SET_FETCH", isFetch } as const),
    login: (username: string, password: string) => ({ type: "USER_LOGIN", username, password } as const),
    auth: () => ({ type: "USER_AUTH" } as const),
    registration: (username: string, password: string, passwordTwo: string) => ({ type: "USER_REGISTRATION", username, password, passwordTwo } as const),
    changeTheme: (theme: ThemeKey) => ({ type: "USER_SET_THEME", theme } as const),
    logout: () => ({ type: "USER_LOGOUT" } as const),
};
export default UserReducer;
