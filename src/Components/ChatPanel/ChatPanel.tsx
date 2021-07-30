import React from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../Redux/store";
import Chat from "../Chat/Chat";
import { Direct, Panel } from "./ChatPanelStyle";

const ChatPanel = () => {
    const isActive = useSelector((state: AppStateType) => state.ChatsReducer.chatIdIsActive);
    return (
        <Panel toggle={isActive ? true : false}>
            <Direct>Выберете чат</Direct>
            {isActive && <Chat name={isActive.name} />}
        </Panel>
    );
};

export default ChatPanel;
