import { Chat } from "../../Types/Chats";
import api from "../Api";

export default class ChatsApi {
    static async getChats() {
        return api.get<Chat>("/chats").then((res) => res.data);
    }
}
