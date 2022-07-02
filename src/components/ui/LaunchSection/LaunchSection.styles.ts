import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: flex-end;
  position: relative;
  height: 100vh;
  scroll-snap-align: start;
`;

export const ImageContainer = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100vh;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 0%, 0.2);
    left: 0;
    top: 0;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    padding: 0 1rem;
    margin-bottom: 64px;

    ${theme.breakpoints.minWidth('sm')} {
      padding: 0 2rem;
    }

    ${theme.breakpoints.minWidth('md')} {
      padding: 0 4rem;
    }

    ${theme.breakpoints.minWidth('lg')} {
      padding: 0 7rem;
    }
  `};
`

export const SubTitle = styled.span`
  ${({ theme }) => css`
    font-size: 1.125rem;
    color: ${theme.colors.grayscale[50]};
    text-transform: uppercase;
    font-weight: 300;
  `};
`

export const Title = styled.h2`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-weight: 800;
    color: ${theme.colors.grayscale[50]};
    font-size: 2.6rem;
    text-shadow: ${theme.colors.grayscale[950]} 0px 0px 2px;
    margin-bottom: 1.5rem;
  `};
`