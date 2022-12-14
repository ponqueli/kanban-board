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
  height: 10vh; 
  min-height: 70px;

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0.625rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 66vh;
  min-height: 66vh;
  overflow-y: auto;
  width: 21.85rem;

  @media (max-height: 502px) {
    height: 60vh;
    min-height: 60vh;
  }
`;
