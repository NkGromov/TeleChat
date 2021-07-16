import styled from "styled-components";

export const ModalWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(8px) brightness(0.5);
`;
export const ModalContent = styled.div`
    background-color: #254b6e;
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
    color: #fff;
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
    color: #fff;
`;
