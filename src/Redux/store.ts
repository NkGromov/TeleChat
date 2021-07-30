import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import AppReducer from "./AppReducer";
import ChatsReducer from "./ChatsReducer";
import { rooWathcer } from "./Sagas";
import UserReducer from "./UserReducer";

const sagaMiddleWare = createSagaMiddleware();

const reducers = combineReducers({ UserReducer, ChatsReducer, AppReducer });
type reducersType = typeof reducers;

export type AppStateType = ReturnType<reducersType>;

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>;

const store = createStore(reducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rooWathcer);
// @ts-ignore
window.store = store;

export default store;
