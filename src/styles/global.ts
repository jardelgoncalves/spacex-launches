import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-snap-type: y mandatory;
    font-size: 16px;
  }

  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.grayscale[950]};
      color: ${theme.colors.grayscale[50]};
      scroll-snap-type: y mandatory;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', Droid Sans, 'Helvetica Neue', sans-serif;
    `};
  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: default;
      pointer-events: none;
    }
  }
`