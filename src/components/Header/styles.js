import styled from "styled-components";

export const Container = styled.header`
  height: 15vh;
  width: 100vw;
  padding: 0  2rem;
  background-color: ${({ color }) => color};
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  display: flex;
  align-items: center;

  h1 {
    margin-right: 1rem;
  }

  @media(max-width: 602px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 1rem;
    padding-top: 1rem;
    height: 18vh;
  }
`;

export const SwitchIcon = styled.img`
  margin: 0.25rem;
  height: 70%;
  width: 70%;
`;