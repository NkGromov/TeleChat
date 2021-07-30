import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { io, Socket } from "socket.io-client";
import img from "../../Image/eraser.svg";
import { ChatActions } from "../../Redux/ChatsReducer";
import { AppStateType } from "../../Redux/store";
import { Chat } from "../../Types/Chats";
import { ChatAvatar, ChatAvatarDefault, ChatButton, ChatItem, ChatList, Name, Notifications, Text, TextWrapper, Time, TopText } from "./ChatListStyle";
type itemProps = {
    name: string;
    text: string;
    avatar: string | null;
    id: number;
    companionId: number;
    notifications: number;
    time: string;
};
const server = "http://localhost:8080";
export let socket: Socket = io(server, { autoConnect: false });

const Chats: React.FC = () => {
    const dispatch = useDispatch();
    const chats = useSelector((state: AppStateType) => state.ChatsReducer.chats);
    const findUsers = useSelector((state: AppStateType) => state.UserReducer.findUsers);
    const isAuth = useSelector((state: AppStateType) => state.UserReducer.isAuth);
    const userId = useSelector((state: AppStateType) => state.UserReducer.user.id);

    useEffect(() => {
        if (isAuth) dispatch(ChatActions.chats());
    }, [isAuth]);
    useEffect(() => {
        if (!isAuth || !socket) return;
        chats.forEach((el) => {
            socket.emit("join_room", el.chatId);
        });
    }, [chats.length]);

    useEffect(() => {
        if (!userId) return;
        socket.auth = { userId };
        socket.connect();
        socket.on("recive_message", ({ messagesData, chatId }) => {
            dispatch(ChatActions.setNewMessages(chatId, messagesData.messages, messagesData.notifications));
            socket.emit("get_notifications", { chatId, userId });
        });
        socket.on("recive_status", ({ notifications, chatId }) => {
            dispatch(ChatActions.setNewStatus(chatId, notifications));
        });
        socket.on("recive_chats", (chats: Chat[]) => {
            dispatch(ChatActions.setChats(chats));
        });
        return () => {
            socket.emit("disconnect");
        };
    }, [userId]);

    return (
        <ChatList>
            <SimpleBar style={{ maxHeight: "inherit" }}>
                {findUsers.length !== 0
                    ? findUsers.map((el) => (
                          <Item key={el.user_id} id={el.user_id} companionId={el.user_id} time="" name={el.username} avatar={el.avatar} text="" notifications={0} />
                      ))
                    : chats.map((el) => (
                          <Item
                              key={el.chatId}
                              id={el.chatId}
                              name={el.companion.username}
                              avatar={el.companion.avatar}
                              notifications={el.notifications}
                              companionId={el.companion.user_id}
                              text={el.messages.length !== 0 ? el.messages.reverse()[0].message : ""}
                              time={el.messages.length !== 0 ? el.messages.reverse()[0].date : ""}
                          />
                      ))}
            </SimpleBar>
        </ChatList>
    );
};

const Item: React.FC<itemProps> = ({ name, text, avatar, id, companionId, notifications, time }) => {
    const dispatch = useDispatch();
    const [isActiveButton, setIsActiveButton] = useState(false);
    const idChatIsActive = useSelector((state: AppStateType) => state.ChatsReducer.chatIdIsActive?.id);
    const showDate = new Date(time);
    const hours = ("0" + showDate.getHours()).slice(-2);
    const minutes = ("0" + showDate.getMinutes()).slice(-2);
    const setIsActive = () => {
        dispatch(ChatActions.setActiveChat({ id, companionId, name }));
    };
    useEffect(() => {
        if (idChatIsActive === id) setIsActiveButton(true);
        else setIsActiveButton(false);
    }, [idChatIsActive]);
    return (
        <ChatItem>
            <ChatButton onClick={setIsActive} isActive={isActiveButton}>
                {avatar ? <ChatAvatar src={img} alt="Аватар чата" /> : <ChatAvatarDefault>{name[0]}</ChatAvatarDefault>}
                <TextWrapper>
                    <TopText>
                        <Name>{name}</Name>
                        <Time>
                            {hours}:{minutes}
                        </Time>
                    </TopText>
                    <Text color="#8495a9" marginTop="15px" dots={true}>
                        {text}
                    </Text>
                    {notifications !== 0 && <Notifications>{notifications}</Notifications>}
                </TextWrapper>
            </ChatButton>
        </ChatItem>
    );
};

export default Chats;
