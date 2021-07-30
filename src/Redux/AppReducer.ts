import { InferActionsTypes } from "./store";

const initialState = {
    isInit: false,
};

export type initialStateDraw = typeof initialState;

const AppReducer = (state = initialState, action: ActionsTypes): initialStateDraw => {
    switch (action.type) {
        case "APP_CHANGE_INIT":
            return { ...state, isInit: action.isInit };

        default:
            return state;
    }
};
export type ActionsTypes = InferActionsTypes<typeof AppActions>;
export const AppActions = {
    setInit: (isInit: boolean) => ({ type: "APP_CHANGE_INIT", isInit } as const),
    initialApp: () => ({ type: "APP_INIT" } as const),
};
export default AppReducer;
