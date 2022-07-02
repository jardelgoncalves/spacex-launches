import styled, { css } from 'styled-components';

export const Wrap = styled.a`
  ${({ theme }) => css`
    display: inline-block;
    height: 56px;
    padding: 0 3rem;
    font-size: 12px;
    color: ${theme.colors.grayscale[50]};
    line-height: 56px;
    box-shadow: ${theme.colors.grayscale[50]} 0px 0px 0px 3px;
    cursor: pointer;
    text-transform: uppercase;

    transition: ${theme.motions.short};

    &:hover {
      background-color: ${theme.colors.grayscale[50]};
      color: ${theme.colors.grayscale[950]};
    }
  `};
`;