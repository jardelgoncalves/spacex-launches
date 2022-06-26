import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.grayscale[950]};
      color: ${theme.colors.grayscale[50]};
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