import React from "react";
import Chat from "../Chat/Chat";
import { Direct, Panel } from "./ChatPanelStyle";

const ChatPanel = () => {
    return (
        <Panel>
            <Direct>Выберете чат</Direct>
            <Chat name="Александр" />
        </Panel>
    );
};

export default ChatPanel;
