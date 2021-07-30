import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import send from "../../Image/send.svg";
import { AppStateType } from "../../Redux/store";
import { UserActions } from "../../Redux/UserReducer";
import { Button } from "../Buttons/ButtonStyle";
import { Border } from "../Chat/ChatStyle";
import { socket } from "../ChatList/ChatList";
import { TextArea } from "../Inputs/InputStyle";
import { ModalForm } from "../Modal/ModalStyle";

const ChatForm = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state: AppStateType) => state.UserReducer.user.id);
    const acitiveChat = useSelector((state: AppStateType) => state.ChatsReducer.chatIdIsActive);
    const findUsers = useSelector((state: AppStateType) => state.UserReducer.findUsers);
    const chatSchema = Yup.object().shape({
        input: Yup.string().required("Required"),
    });
    const chat = useFormik({
        initialValues: {
            input: "",
        },
        validationSchema: chatSchema,
        onSubmit: ({ input }) => {
            if (findUsers.length === 0) socket.emit("send_message", { input, chatId: acitiveChat?.id, userId, otherId: acitiveChat?.companionId });
            else socket.emit("send_message", { input, chatId: -1, userId, otherId: acitiveChat?.companionId });
            dispatch(UserActions.setFindUsers([]));
            chat.setFieldValue("input", "");
        },
    });

    return (
        <ModalForm onSubmit={chat.handleSubmit}>
            <Border>
                <TextArea color="transparent" {...chat.getFieldProps("input")} placeholder="Напишите сообщение" />
                <Button type="submit">
                    <img src={send} alt="Отрпавить сообщение" />
                </Button>
            </Border>
        </ModalForm>
    );
};

export default ChatForm;
