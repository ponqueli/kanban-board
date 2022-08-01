import { createGlobalStyle } from 'styled-components';
import { SCREEN_BREAKPOINTS_ENUM } from '../constants/breakpoints';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text_primary};
    -webkit-font-smoothing: antialiased;
    overflow-y: auto;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 2.5rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.text_secondary};

    span{
      color: ${({ theme }) => theme.colors.onPrimary};
    }
  }
`;