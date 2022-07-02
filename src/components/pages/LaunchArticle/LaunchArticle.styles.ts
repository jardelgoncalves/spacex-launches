import styled, { css } from 'styled-components';

export const Main = styled.main`
  ${({ theme }) => css`
    margin: 4rem auto;
    max-width: ${theme.sizes.viewport};
    width: 100%;
  `};
`;

export const Content = styled.section`
  ${({ theme }) => css`
    padding: 0 16px;

    ${theme.breakpoints.minWidth("md")} {
      padding: 0;
    }
  `};
`;

export const SubTitle = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: 1rem;
    color: ${theme.colors.grayscale[50]};
    text-transform: uppercase;
    font-weight: 300;
    margin-top: 1.5rem;
  `};
`

export const Title = styled.h1`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-weight: 800;
    color: ${theme.colors.grayscale[50]};
    font-size: 2rem;
    text-shadow: ${theme.colors.grayscale[950]} 0px 0px 2px;
    margin-bottom: 0.5rem;

    ${theme.breakpoints.minWidth("md")} {
      font-size: 2.6rem;
    }
  `};
`

export const RocketName = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: 1rem;
    color: ${theme.colors.grayscale[100]};
  `};
`

export const Description = styled.p`
  ${({ theme }) => css`
    margin-top: 2rem;
    font-size: 1rem;
    line-height: 24px;
    color: ${theme.colors.grayscale[500]};

    a {
      color: ${theme.colors.grayscale[50]};
      cursor: pointer;
    }
  `};
`

export const IframeWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  iframe {
    max-width: 616px;
    width: 100%;
    height: 346.5px;
  }
`

export const WatchTitle = styled.h2`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-weight: 800;
    color: ${theme.colors.grayscale[50]};
    font-size: 1.25rem;
    text-shadow: ${theme.colors.grayscale[950]} 0px 0px 2px;
    margin-top: 4rem;
    margin-bottom: 1rem;
    padding: 0 16px;
    text-align: center;

    ${theme.breakpoints.minWidth("md")} {
      font-size: 1.5rem;
    }
  `};
`