import { createGlobalStyle } from 'styled-components';
import { SCREEN_BREAKPOINTS_ENUM } from '../constants/breakpoints';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html {
    @media (max-width: ${SCREEN_BREAKPOINTS_ENUM.LARGE}px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: ${SCREEN_BREAKPOINTS_ENUM.MEDIUM}px) {
      font-size: 87.5%; //14px
    }

    @media (max-width:  ${SCREEN_BREAKPOINTS_ENUM.TINY}px) {
      font-size: 75%; //12px
    }
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text_primary};
    overflow:hidden;
    -webkit-font-smoothing: antialiased;
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

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text_tertiary};
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .modal-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 42.5rem){ 
      align-items: flex-end;
    }
  }

  .react-modal-content {
    width: 100%;
    max-width: 36rem;
    //min-height: 33rem ;
    width: 36rem;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.3125rem;
    background-color: ${({ theme }) => theme.colors.components_background};

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

  ::-webkit-scrollbar {
    width: 0.95rem;
    height: 0.95rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.scrollbar_background};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.scrollbar_thumb};
    border-radius: 0.5rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.scrollbar_thumb_hover};
  }
`;
