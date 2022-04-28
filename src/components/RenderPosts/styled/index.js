import styled from "styled-components";

export const Main = styled.div`
  h1 {
    text-align: center;
    color: white;

    @media (max-width: 850px) {
      font-size: 1.9em;
    }
  }
`;

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;

  @media (max-width: 1500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  height: 38vw;
  width: 30%;
  margin: 10px;
  background-color: #199df7;
  color: #fff;
  border-radius: 5px;

  p {
    padding-left: 5%;
    font-size: 1.2em;
    background-color: #199df7;
  }

  @media (max-width: 1500px) {
    width: 80%;
    height: 75vw;
  }

  @media (max-width: 850px) {
    width: 80%;
    height: 95vw;
  }

  @media (max-width: 500px) {
    width: 90%;
    height: 500px;
  }
`;

export const Image = styled.div`
  height: 80%;
  text-align: center;
  background-color: #199df7;
  border-radius: 5px;

  img {
    height: 100%;
    width: 90%;
    object-fit: cover;

    @media (max-width: 500px) {
      height: 9S0%;
    }
  }

  @media (max-width: 500px) {
    height: 70%;
  }
`;
