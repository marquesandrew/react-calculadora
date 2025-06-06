import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        background-color: #f0f0f0;
    }

    * {
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
    }
`;