import styled from "styled-components";

export const Container = styled.header`
  height: 15vh;
  min-height: 5rem;
  width: 100vw;
  min-width: 18.5rem;
  padding: 0  2rem;
  background-color: ${({ color }) => color};
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  display: flex;
  align-items: center;

  h1 {
    margin-right: 1rem;
    text-align: center;
    color: ${({theme}) => theme.colors.onPrimary};

    filter: drop-shadow(2px 2px 1px ${({theme}) => theme.title === 'dark'? '#000' : '#fff' });
    span {
      text-transform: uppercase;
      font-family: 'Hind Vadodara', sans-serif;
      font-weight: 900;
    }
  }

  @media(max-width: 602px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 1rem;
    padding-top: 1rem;
    height: 20vh;
    min-height: 14.5rem;

    .avatar{
      margin-top: 1.5rem;
    }

    h1 {
      margin-bottom: 1rem;
      margin-top: 1rem;
      font-size: 2.5rem;
    }
  }
`;

export const SwitchIcon = styled.img`
  margin: 0.25rem;
  height: 70%;
  width: 70%;
`;