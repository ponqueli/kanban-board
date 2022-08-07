import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 1rem;
  height: 100%;
  flex: 0 0 20rem;

  opacity: ${({ isDone }) => isDone ? 0.6 : 1};

  border-right: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem; 

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0.625rem;
  }

  button {
    width: 3rem;
    height: 3rem;
    border-radius: 1.125rem;
    border: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const TaskList = styled.ul`
  height: 65vh;
  overflow-y: auto;
  margin-top: 1.875rem;
`;
