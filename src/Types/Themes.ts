import { Themes } from "../Themes/Themes";

export type Themes = typeof Themes;
export type ThemeKey = keyof Themes;
export type Color = {
    light: string;
    dark: string;
    mark: string;
    text: string;
    textGrey: string;
    errorColor: string;
};
