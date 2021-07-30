import styled from "styled-components";

export const Input = styled.input<{ error?: boolean }>`
    background-color: ${(props) => props.color};
    width: 100%;
    padding: 5px 10px;
    font-size: 16px;
    border-radius: 5px;
    position: relative;
    height: ${(props) => props.height || "initial"};
    box-shadow: ${(props) => (props.theme.errorColor ? `0px 15px 10px 0px rgb(${props.theme.errorColor} / 0.2)` : "0px 15px 10px 0px rgb(34 60 80 / 0.2)")};
    border: ${(props) => (props.error ? `1px solid ${props.theme.errorColor}` : "none")};
    ::placeholder {
        font-size: 16px;
        transition: 0.2s;
        color: ${(props) => props.theme.textGrey};
    }
    &:focus {
        ::placeholder {
            font-size: 14px;
            opacity: 0.5;
        }
    }
    &:hover,
    &:focus {
        box-shadow: ${(props) => (props.theme.errorColor ? `0px 15px 10px 0px rgb(${props.theme.errorColor} / 0.8)` : "0px 15px 10px 0px rgb(34 60 80 / 0.8)")};
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
export const TextArea = styled.textarea<{ size?: number }>`
    resize: none;
    position: relative;
    background-color: ${(props) => props.color || "#ffffff"};
    font-size: ${(props) => props.size || "20px"};
    color: ${(props) => props.theme.text};
    width: 100%;
    border: none;
    outline: none;
    min-height: 30px;
    ::placeholder {
        font-size: 16px;
        transition: 0.2s;
        color: ${(props) => props.theme.textGrey};
    }
    &:focus {
        ::placeholder {
            font-size: 14px;
            opacity: 0.5;
        }
    }
    ::-webkit-scrollbar {
        display: none;
    }
`;
export const Error = styled.span`
    font-size: 16px;
    color: red;
    display: block;
    margin-top: 5px;
`;
