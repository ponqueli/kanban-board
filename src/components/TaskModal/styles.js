import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    margin-bottom: 2rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  margin: 0.5rem 0 ${({ showValidationMessage }) => showValidationMessage ? 0 : '2rem'} 0;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${({theme}) => theme.colors.placeholder};
  font-size: 1rem;
  background-color: ${({theme}) => theme.colors.background};
  color: ${({theme}) => theme.colors.text_tertiary};

  ::placeholder {
    color: ${({theme}) => theme.colors.placeholder};
  }
`;

export const ValidationMessage = styled.p`
  color: ${({theme}) => theme.colors.bug};
  font-weight: bold;
  padding: 0.5rem 0 1.5rem 0;
  
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.2rem;
  }
`;