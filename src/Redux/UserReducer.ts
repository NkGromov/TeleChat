import { InferActionsTypes } from "./store";

const initialState = {};

export type initialStateDraw = typeof initialState;

const UserReducer = (state = initialState, action: ActionsTypes): initialStateDraw => {
    switch (action.type) {
        default:
            return state;
    }
};
type ActionsTypes = InferActionsTypes<typeof actions>;
export const actions = {};
export default UserReducer;
