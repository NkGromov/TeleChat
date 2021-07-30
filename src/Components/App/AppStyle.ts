import styled, { createGlobalStyle } from "styled-components";
export const Global = createGlobalStyle`
   *,
    *::after,
    *::before {
        box-sizing: border-box;
        transition: 0.2s;
        scroll-behavior: smooth;

}
    body{
        font-family: "Roboto", sans-serif;
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        transition: 0s;
        overflow: hidden;
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    button{
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
        padding: 0;
    }
    input{
        outline: none;
        border: none;
    }
    .simplebar-content{
        transition: 0s;
        display: flex;
        flex-direction: column;
    }
  
`;
export const Grid = styled.div`
    display: grid;
    grid-template-columns: minmax(350px, 450px) minmax(50%, 100%);
    width: 100vw;
    height: 100vh;
    @media (max-width: 1024px) {
        grid-template-columns: 100%;
        overflow: hidden;
        position: relative;
    }
`;
export const Toggle = styled.div`
    position: absolute;
    right: 0;
    top: calc(50% - 15px);
    width: 30px;
    height: 30px;
    background-color: ${(props) => props.theme.dark};
    border-radius: 50%;
    border: 3px solid ${(props) => props.theme.mark};
`;

export const ToggleWrapper = styled.div<{ isActive: boolean }>`
    width: 50px;
    height: 20px;
    background-color: ${(props) => props.theme.mark};
    border-radius: 40px;
    position: relative;
    ${Toggle} {
        right: ${(props) => (props.isActive ? "0" : "20px")};
    }
`;
