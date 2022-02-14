import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

     :root {
        --primaryColor : #524EF8;
        --secondColor : #2F2D93;
        --greySubtitle : #686868;
        --secondTitleColor : #ffffff;
     }


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: 'Roboto', sans-serif;

    }
`;
