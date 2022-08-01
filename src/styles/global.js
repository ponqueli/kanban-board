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

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 42.5rem){ 
      align-items: flex-end;
    }
  }

  .react-modal-content {
    width: 100%;
    max-width: 36rem;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.3125rem;

    @media screen and (max-width: 69rem) {
      padding: 1.5rem;
      overflow-y: auto;
      width: 50%;
    }

    @media screen and (max-width: 42.5rem){ 
      width: 100%;
      border-top-left-radius: 2rem;
      border-top-right-radius: 2rem;
    }
    
  }
  .react-modal-close{
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.7);
    }

    @media screen and (max-width: 69rem){
      top: 0.5rem;
      right: 0.5rem;
    }

    @media screen and (max-width: 36rem) {
      top:  0.5rem;
      right: 0.5rem;
    }
  }
`;