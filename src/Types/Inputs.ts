export interface Iinput {
    name: string;
    value: string;
    color?: string;
    onChange: any;
    type?: string;
    height?: string;
}
export interface IinputForm extends Iinput {
    nameInp: string;
}
