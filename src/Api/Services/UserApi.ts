import { ThemeKey } from "../../Types/Themes";
import { User } from "../../Types/User";
import api from "../Api";

export default class UserApi {
    static async theme(theme: ThemeKey) {
        return api.put<User>("/theme", { theme }).then((res) => res.data);
    }
}
