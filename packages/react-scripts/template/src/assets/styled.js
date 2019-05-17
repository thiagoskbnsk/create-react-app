import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Poppins:400,500,600,700");

  * {
    box-sizing: border-box;
  }

  *::selection {
    background-color: #fdcfd8;
    color: #514f7d;
  }

  *::-moz-selection {
    background-color: #fdcfd8;
    color: #514f7d;
  }

  *:focus {
    outline: 0;
  }

  html {
    overflow-x: hidden;

    body {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      font-family: "Open Sans", "Poppins", sans-serif;
      font-size: 16px;
      font-display: auto;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
      background-color: #f8f8f9;
    }
  }

  #root {
    min-height: 100vh;
  }
`;

export const AddingOutline = createGlobalStyle`
  @media(min-width: 767px) {
    *:focus:not(:active):not([type="range"]) {
      box-shadow: 0 0 0 4px rgba(253, 207, 216, 1) !important;
    }

    *:active {
      outline: none;
    }
  }
`;

export default GlobalStyle;
