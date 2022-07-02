import styled, { css } from 'styled-components';

type ContainerProps = {
  transparent?: boolean
}

export const Container = styled.header<ContainerProps>`
  ${({ theme, transparent }) => css`
    height: ${theme.sizes.header};
    width: 100%;
    background-color: ${transparent ? 'transparent' : theme.colors.grayscale[950]};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
  `};
`;

export const Wrap = styled.div`
  ${({ theme }) => css`
    height: ${theme.sizes.header};
    max-width: ${theme.sizes.viewport};
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 0 16px;

    a {
      display: inline-block;
      position: relative;
      text-decoration: none;
      font-size: 1rem;
      color: ${theme.colors.grayscale[50]};

      &::after {
        transition: ${theme.motions.short};
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        height: 2px;
        width: 0;
        background-color: ${theme.colors.grayscale[500]};
      }

      &:last-child:hover {
        &::after {
          width: 100%;
        }
      }
    }
  `};
`;