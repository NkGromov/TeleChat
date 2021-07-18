import styled from "styled-components";

export const Inp = styled.input.attrs((props) => ({
    type: props.type || "text",
    name: props.name,
    value: props.value,
    onChange: props.onChange,
}))`
    background-color: ${(props) => props.color};
    width: 100%;
    padding: 5px 10px;
    font-size: 16px;
    border-radius: 5px;
    height: ${(props) => props.height || "initial"};
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
