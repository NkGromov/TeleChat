import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { AppStateType } from "../../Redux/store";
import { UserActions } from "../../Redux/UserReducer";
import { Themes } from "../../Themes/Themes";
import ChatPanel from "../ChatPanel/ChatPanel";
import Modal from "../Modal/Modal";
import SideBar from "../SideBar/SideBar";
import { Global, Grid } from "./AppStyle";

function App() {
    const dispatch = useDispatch();
    const isAuth = useSelector((state: AppStateType) => state.UserReducer.isAuth);
    const UserTheme = useSelector((state: AppStateType) => state.UserReducer.user.theme_color);
    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(UserActions.auth());
        }
    }, []);

    return (
        <>
            <Global />
            <ThemeProvider theme={UserTheme ? Themes[UserTheme].colors : Themes.dark.colors}>
                <Grid>
                    <SideBar />
                    <ChatPanel />
                    {!isAuth && <Modal />}
                </Grid>
            </ThemeProvider>
        </>
    );
}

export default App;
