import styled from 'styled-components';

export const Container = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    height: 13vh;
    position: relative;

    p {
      margin-top: 0.5rem;
    }

    h2 {
      margin-bottom: 0.25rem;
    }

    & .right > button {
      border: 0;
      background: transparent;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.7);
      }

      @media screen and (max-width: 69rem) {
        top: 0.5rem;
        right: 0.5rem;
      }

      @media screen and (max-width: 36rem) {
        top: 0.5rem;
        right: 0.5rem;
      }
    }
  }

  main{
    display: block;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 1rem;

  button {
    
    & + button {
      margin-left: 1rem;
    }

    &.confirm-button {
      height: 2.5rem;
      margin-top: 0.5rem;
      padding: 0 1.5rem;
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.save};
      text-transform: capitalize;
      border-radius: 1rem;
      border: 0;
      font-size: 1rem;
      font-weight: 600;
      transition: filter 0.2s;
      transition: transform 0.2s;

      &:hover:not([disabled]) {
        filter: brightness(0.9);
        transform: scale(1.05);
      }

      &:disabled {
        background: "#E7E7E7";
      }
    }

    &.cancel-button{
      height: 2.5rem;
      margin-top: 0.5rem;
      padding: 0 1.5rem;
      background: ${({ theme }) => theme.colors.text_tertiary};
      color: ${({ theme }) => theme.colors.save};
      text-transform: capitalize;
      border-radius: 1rem;
      border: 0;
      font-size: 1rem;
      font-weight: 600;
      transition: filter 0.2s;
      transition: transform 0.2s;

      &:hover:not([disabled]) {
        filter: brightness(0.9);
        transform: scale(1.05);
      }

      &:disabled {
        background: "#E7E7E7";
      }
    }
  }
   
`;
