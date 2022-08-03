import styled from "styled-components";

export const Container = styled.header`
  height: 5rem;
  width: 100%;
  padding: 0  2rem;
  background-color: ${({ color }) => color};
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin-right: 1rem;
  }
`;

export const SwitchIcon = styled.img`
  margin: 0.25rem;
  height: 70%;
  width: 70%;
`;