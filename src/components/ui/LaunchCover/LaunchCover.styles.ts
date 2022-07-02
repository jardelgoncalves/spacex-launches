import styled, { css, keyframes } from 'styled-components';

const xAnimate = keyframes`
  from {
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
  }
  to {
    clip-path: polygon(0 0, 0% 20%, 0 50%, 0% 80%, 0 100%, 50% 100%, 100% 100%, 100% 80%, 100% 50%, 100% 20%, 100% 0, 50% 0);
  }
`

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 350px;
    position: relative;

    img {
      transition: transform 3s;
      transform: scale(1.2);

      animation-name: ${xAnimate};
      animation-duration: 4s;

      &:hover {
        transform: scale(1);
      }
    }

    ${theme.breakpoints.minWidth('sm')} {
      height: 550px;
    }
  `};
`;