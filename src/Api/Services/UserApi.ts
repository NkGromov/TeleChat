import { Companion } from "../../Types/Chats";
import { ThemeKey } from "../../Types/Themes";
import { User } from "../../Types/User";
import api from "../Api";

export default class UserApi {
    static async theme(theme: ThemeKey) {
        return api.put<User>("/theme", { theme }).then((res) => res.data);
    }
    static async findUsers(name: string) {
        return api.get<Companion[]>("/users", { params: { userName: name } }).then((res) => res.data);
    }
}
