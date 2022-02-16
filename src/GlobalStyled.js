import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

     :root {
        --primaryColor : #524EF8;
        --secondColor : #2F2D93;
        --greySubtitle : #686868;
        --secondTitleColor : #ffffff;
        --montserratFont : "Montserrat", sans-serif;
        --robotoFont : 'Roboto', sans-serif;
        --dmsansFont : 'DM Sans', sans-serif;
     }


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
	    font-family: var(--montserratFont);
    }
`;
