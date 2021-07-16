import { combineReducers, createStore } from "redux";
import UserReducer from "./UserReducer";

const reducers = combineReducers({ UserReducer });
type reducersType = typeof reducers;

export type AppStateType = ReturnType<reducersType>;

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>;

const store = createStore(reducers);
// @ts-ignore
window.store = store;

export default store;
