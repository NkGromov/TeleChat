import React from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../Redux/store";
import Chat from "../Chat/Chat";
import { Direct, Panel } from "./ChatPanelStyle";

const ChatPanel = () => {
    const chats = useSelector((state: AppStateType) => state.ChatsReducer.chats);
    return (
        <Panel>
            <Direct>Выберете чат</Direct>
            {chats.map((el) => (
                <Chat key={el.chatId} id={el.chatId} name={el.companion.username} />
            ))}
        </Panel>
    );
};

export default ChatPanel;
