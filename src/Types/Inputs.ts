import { ChangeEvent } from "react";

export interface BasicInput {
    name: string;
    value: string;
    color?: string;
    onChange: (e: string | ChangeEvent<any>) => void;
    onBlur: (e: string | ChangeEvent<any>) => void;
}
export interface TextArea extends BasicInput {
    isActive: boolean;
}
export interface Iinput extends BasicInput {
    type?: string;
    height?: string;
}
export interface IinputForm extends Iinput {
    nameInp: string;
    errors?: string;
}
