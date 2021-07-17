import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../Redux/store";
import { UserActions } from "../../Redux/UserReducer";
import ChatPanel from "../ChatPanel/ChatPanel";
import Modal from "../Modal/Modal";
import SideBar from "../SideBar/SideBar";
import { Global, Grid } from "./AppStyle";

function App() {
    const dispatch = useDispatch();
    const isAuth = useSelector((state: AppStateType) => state.UserReducer.isAuth);
    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(UserActions.auth());
        }
    }, []);

    return (
        <>
            <Global />
            <Grid>
                <SideBar />
                <ChatPanel />
                {!isAuth && <Modal />}
            </Grid>
        </>
    );
}

export default App;
