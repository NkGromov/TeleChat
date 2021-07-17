import React from "react";
import { Text, Time } from "../ChatsList/ChatsListStyle";
import { Message, MessagesList, MyMessage } from "./MessagesStyle";
type itemProps = {
    isMy: boolean;
    children: React.ReactNode;
};
const Mesages = () => {
    return (
        <MessagesList>
            <Item isMy={true}>
                Текст про что то чтобы держать в курсе а потом еще текст Текст про что то чтобы держать в курсе а потом еще текст Текст про что то чтобы держать в курсе а потом еще
                текст Текст про что то чтобы держать в курсе а потом еще текст
            </Item>
            <Item isMy={true}>
                Текст про что то чтобы держать в курсе а потом еще текст Текст про что то чтобы держать в курсе а потом еще текст Текст про что то чтобы держать в курсе а потом еще
                текст Текст про что то чтобы держать в курсе а потом еще текст
            </Item>
            <Item isMy={true}>
                Текст про что то чтобы держать в курсе а потом еще текст Текст про что то чтобы держать в курсе а потом еще текст Текст про что то чтобы держать в курсе а потом еще
                текст Текст про что то чтобы держать в курсе а потом еще текст
            </Item>
        </MessagesList>
    );
};
const Item: React.FC<itemProps> = ({ isMy, children }) => {
    if (isMy)
        return (
            <MyMessage>
                <Text color="#fff" size="18px">
                    {children}
                </Text>
                <Time>12:45</Time>
            </MyMessage>
        );
    return (
        <Message>
            <Text color="#fff" size="18px">
                {children}
            </Text>
            <Time>12:45</Time>
        </Message>
    );
};
export default Mesages;
