import { User } from "./User";

export type Auth = {
    refreshToken: string;
    accesToken: string;
    user: User;
};
