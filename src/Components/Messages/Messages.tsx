import React, { useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { Text, Time } from "../ChatList/ChatListStyle";
import { Message, MessagesList, MyMessage } from "./MessagesStyle";
type itemProps = {
    isMy: boolean;
    children: React.ReactNode;
};
type Props = {
    id: number;
    name: string;
};
const Mesages: React.FC<Props> = ({ id, name }) => {
    const [isAutoScroll, setIsAutoScroll] = useState(true);
    const bottomRef = useRef<HTMLDivElement>(null);
    return (
        <MessagesList>
            <SimpleBar style={{ minHeight: 800, padding: 20 }}>
                <Item isMy={true}>
                    {name}
                    Текст про что то чтобы держать в курсе а потом еще текст Текст про что то чтобы держать в курсе а потом еще текст Текст про что то чтобы держать в курсе а потом
                    еще текст Текст про что то чтобы держать в курсе а потом еще текст
                </Item>
                <Item isMy={true}>
                    {name}
                    Текст про что то чтобы держать в курсе а потом еще текст Текст про что то чтобы держать в курсе а потом еще текст Текст про что то чтобы держать в курсе а потом
                    еще текст Текст про что то чтобы держать в курсе а потом еще текст
                </Item>

                <div ref={bottomRef}></div>
            </SimpleBar>
        </MessagesList>
    );
};
const Item: React.FC<itemProps> = ({ isMy, children }) => {
    if (isMy)
        return (
            <MyMessage>
                <Text size="18px">{children}</Text>
                <Time>12:45</Time>
            </MyMessage>
        );
    return (
        <Message>
            <Text size="18px">{children}</Text>
            <Time>12:45</Time>
        </Message>
    );
};
export default Mesages;
