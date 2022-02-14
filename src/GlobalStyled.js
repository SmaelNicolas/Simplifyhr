import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

     :root {
        --primaryColor : #524EF8;
        --greySubtitle : #686868;
     }


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: 'Roboto', sans-serif;

    }
`;
