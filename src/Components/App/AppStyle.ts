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
  
`;
export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100vw;
    height: 100vh;
`;
