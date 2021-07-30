import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { AppStateType } from "../../Redux/store";
import { socket } from "../ChatList/ChatList";
import { Text, Time } from "../ChatList/ChatListStyle";
import { Message, MessagesList, MyMessage } from "./MessagesStyle";
type itemProps = {
    isMy: boolean;
    children: React.ReactNode;
    date: string;
};

const Messages = () => {
    const [isAutoScroll, setIsAutoScroll] = useState(true);
    const messages = useSelector((state: AppStateType) => state.ChatsReducer.chatIdIsActive?.messages);
    const chatId = useSelector((state: AppStateType) => state.ChatsReducer.chatIdIsActive?.id);
    const userId = useSelector((state: AppStateType) => state.UserReducer.user.id);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        socket.emit("set_status", { chatId, userId });
        bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }, [messages]);
    return (
        <MessagesList>
            <SimpleBar style={{ maxHeight: "inherit", padding: 20, marginTop: "auto" }}>
                {messages &&
                    messages.map((el) => (
                        <Item key={el.id} date={el.date} isMy={el.user_id === userId ? true : false}>
                            {el.message}
                        </Item>
                    ))}

                <div ref={bottomRef}></div>
            </SimpleBar>
        </MessagesList>
    );
};
const Item: React.FC<itemProps> = ({ isMy, children, date }) => {
    const showDate = new Date(date);
    const hours = ("0" + showDate.getHours()).slice(-2);
    const minutes = ("0" + showDate.getMinutes()).slice(-2);

    if (isMy)
        return (
            <MyMessage>
                <Text size="18px">{children}</Text>
                <Time>
                    {hours}:{minutes}
                </Time>
            </MyMessage>
        );
    return (
        <Message>
            <Text size="18px">{children}</Text>
            <Time>
                {hours}:{minutes}
            </Time>
        </Message>
    );
};
export default Messages;
