import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 85vh;
  width: 100vw;
  overflow-x: auto;

  @media (max-height: 502px) {
    height: 83vh;
  }
`;