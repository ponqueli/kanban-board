import styled from "styled-components";

export const Container = styled.header`
  height: 5.71rem;
  padding: 0  2.14rem;
  background-color: ${({ color }) => color};

  display: flex;
  align-items: center;
  h1 {
    margin-right: 1rem;
  }
`;

export const SwitchIcon = styled.img`
  margin: 0.28rem;
  height: 70%;
  width: 70%;
`;