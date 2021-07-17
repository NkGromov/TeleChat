import { Auth } from "../../Types/ApiResponce";
import api from "../Api";

export default class AuthApi {
    static async login(username: string, password: string) {
        return api.post<Auth>("/login", { username, password }).then((res) => res.data);
    }
    static async registration(username: string, password: string, passwordTwo: string) {
        return api.post<Auth>("/registration", { username, password, passwordTwo }).then((res) => res.data);
    }
    static async logout() {
        return api.post<Auth>("/logut");
    }
    static async chekAuth() {
        return api.get<Auth>("/refresh").then((res) => res.data);
    }
}
