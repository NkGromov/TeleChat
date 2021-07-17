export type User = {
    id: number;
    username: string;
    avatar: null | string;
    date_created: Date;
    theme_color: Theme;
};

export type Theme = "dark" | "light";
