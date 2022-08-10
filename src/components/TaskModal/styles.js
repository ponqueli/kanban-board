import styled from 'styled-components';
import { SCREEN_BREAKPOINTS_ENUM } from "../../constants/breakpoints";
export const Container = styled.form`
  h2 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  button[type='submit'] {
    width: 100%;
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

    @media screen and (max-width: 69rem) {
      height: 3rem;
      text-transform: uppercase;
      font-size: 1.25rem;
    }

    &:disabled {
      background: "#E7E7E7";
    }
  }

  @media(max-width: ${SCREEN_BREAKPOINTS_ENUM.SMALL}px) {
    padding: 1rem;
    font-size: 1.25rem;
    h2{
      font-size: 1.4rem;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  margin: 0.5rem 0
    ${({ showValidationMessage }) => (showValidationMessage ? 0 : '1rem')} 0;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.placeholder};
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text_secondary};

  ::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  @media(max-width: ${SCREEN_BREAKPOINTS_ENUM.SMALL}px) {
    height: 3.5rem;
    ::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
      font-size: 1.25rem;
    }
  }
`;

export const ValidationMessage = styled.p`
  color: ${({ theme }) => theme.colors.bug};
  font-weight: bold;
  padding: 0.5rem 0 1rem 0;

  display: flex;
  align-items: center;

  svg {
    margin-right: 0.2rem;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 7rem;
  margin: 0 0 1rem 0;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.placeholder};
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text_secondary};

  ::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
  @media(max-width: ${SCREEN_BREAKPOINTS_ENUM.SMALL}px) {
    ::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
      font-size: 1.25rem;
    }
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const RadioAndLabelContainer = styled.div`
  padding: 0.3125rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 0.5rem;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }

  & + .radio-and-label-container {
    margin-left: 0.75rem;
  }
  
  @media(max-width: ${SCREEN_BREAKPOINTS_ENUM.SMALL}px) {
    & + .radio-and-label-container{
      margin-left: 0;
      margin-top: 0.1rem;
    }

    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.25rem 0.25rem;

    cursor: pointer;

    span {
      margin-left: 0.3125rem;
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: 500;
      color: #fff;

      cursor: pointer;
    }
  }
`;
