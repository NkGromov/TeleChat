import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { AppActions } from "../../Redux/AppReducer";
import { AppStateType } from "../../Redux/store";
import { UserActions } from "../../Redux/UserReducer";
import { Themes } from "../../Themes/Themes";
import { ThemeKey } from "../../Types/Themes";
import ChatPanel from "../ChatPanel/ChatPanel";
import Modal from "../Modal/Modal";
import SideBar from "../SideBar/SideBar";
import { Global, Grid } from "./AppStyle";

function App() {
    const dispatch = useDispatch();
    const UserTheme = useSelector((state: AppStateType) => state.UserReducer.user.theme_color);
    useEffect(() => {
        const theme = localStorage.getItem("theme") as ThemeKey;
        dispatch(AppActions.initialApp());
        dispatch(UserActions.initTheme(theme));
    }, []);

    return (
        <>
            <Global />
            <ThemeProvider theme={UserTheme ? Themes[UserTheme].colors : Themes.dark.colors}>
                <Grid>
                    <SideBar />
                    <ChatPanel />
                    <Modal />
                </Grid>
            </ThemeProvider>
        </>
    );
}

export default App;
