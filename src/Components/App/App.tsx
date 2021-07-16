import React from "react";
import ChatPanel from "../ChatPanel/ChatPanel";
import Modal from "../Modal/Modal";
import SideBar from "../SideBar/SideBar";
import { Global, Grid } from "./AppStyle";

function App() {
    return (
        <>
            <Global />
            <Grid>
                <SideBar />
                <ChatPanel />
                <Modal />
            </Grid>
        </>
    );
}

export default App;
