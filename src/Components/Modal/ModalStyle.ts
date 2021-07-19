import styled from "styled-components";

export const ModalWrapper = styled.div<{ isActive: boolean }>`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
    backdrop-filter: ${(props) => (props.isActive ? "blur(16px) brightness(0.5)" : "initial")};
`;
export const ModalContent = styled.div`
    background-color: ${(props) => props.theme.light};
    width: 100%;
    max-width: 400px;
    padding: 20px;
    border-radius: 5px;
`;
export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const ModalTitle = styled.h1`
    margin-bottom: 20px;
    color: ${(props) => props.theme.text};
    text-align: center;
`;
export const ModalButton = styled.button.attrs((props) => ({
    type: props.type || "button",
}))`
    max-width: 200px;
    font-size: 18px;
    padding: 10px;
    display: block;
    margin: auto;
    color: ${(props) => props.theme.text};
`;
