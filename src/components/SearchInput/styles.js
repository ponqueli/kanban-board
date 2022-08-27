import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 17vw;
  margin-left: auto;
  margin-right: 1rem;
  border-radius: 1.125rem;
  -webkit-box-shadow: 2px 5px 10px 2px rgba(0, 0, 0, 0.11);
  box-shadow: 2px 5px 10px 2px rgba(0, 0, 0, 0.11);
  border: 2px solid ${({ theme }) => theme.colors.onPrimary};
  background-color: var(--background);

  input {
    width: calc(100% - 2.5rem);
    min-width: 50px;
    background: var(--background);
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.onPrimary};
    font-size: 1rem;
    padding: 0.25rem;
    margin: 0 0.25rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.onPrimary};
    }
  }

  input[type='search']::-webkit-search-cancel-button {
    cursor: pointer;
  }

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    height: 1.75rem;
    margin-left: 0.5rem;
    padding: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: aliceblue;
    border-radius: 100%;
    transition: transform 0.2s;

    :hover {
      transform: scale(1.025);
      cursor: pointer;
    }
  }

  @media(max-width: 602px) {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
