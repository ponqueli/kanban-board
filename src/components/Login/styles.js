import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  font-family: 'Hind Vadodara', sans-serif;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  background-color: ${({ bc }) => bc};
  span.cat {
    font-size: 3rem;
    text-align: center;
    margin-top: auto;
    margin-bottom: 1rem;
    filter: drop-shadow(2px 2px 1px #000);
  }
`;

export const Content=styled.div`
  max-width: 50%;
  background: #fff;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  border-radius: 32px;
  filter: drop-shadow(2px 2px 8px #000);

  section {
    background-image: linear-gradient( 180deg, #FCCF31 10%, #F55555 100%);
    padding: 40px 75px;
    text-align: center;
    border-radius: 0 0 32px 32px;
    border: 3px solid #000;
    border-top: none;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: .06em;
      color: #fff;
      border-radius: 2px;
      text-decoration: none;
      padding: 18px 0px;
      
      span{
        font-size: 1rem;
        font-weight: 500;
        text-transform: uppercase;
        color: #000;
      }
    }
  }
`;

export const Header = styled.header`
  padding-top: 1rem;
  text-align: center;
  border-radius: 32px 32px 0 0;
  border: 3px solid #000;
  h2 {
    margin-top: 1rem;
    font-size: 24px;
    color: #313541;
    font-weight: 500;
    letter-spacing: .36px;
    line-height: 1rem;
    text-align: center;
  }
`;

