import { styled } from "styled-components";

export const Container = styled.div`
  height: 738px;
  background-color: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
  gap: 2rem;

  img {
    width: 32rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2.2rem;
  gap: 2px;
  width: 45%;
  h2 {
    font-size: 2rem;
    font-weight: 600;
  }
  p {
    font-size: 1.1rem;
  }

  .line {
    width: 45%;
    border-bottom: 2px solid #c8d4dd;
  }
`;

export const Midia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

export const MidiaIndice = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  margin-top: 1rem;

  button {
    background-color: #0083ff;
    border: none;
    border-radius: 25px;
    color: white;
    font-weight: 600;
    height: 3rem;
    width: 14rem;
  }

  img {
    margin-left: -1.5rem;
    width: 15rem;
    height: 3rem;
  }
`;

export const TextImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 2rem;
  width: 70%;
  justify-content: space-around;

  p {
    display: flex;
    align-items: center;
    width: 31rem;
    font-weight: 400;
    font-size: 0.7rem;
  }

  img {
    width: 15%;
    padding: none;
    margin: none;
  }

  .star-text,
  card-text {
    display: flex;
    align-items: center;
    gap: 5px;

    img {
      margin-left: 1rem;
      width: 4rem;
    }
  }
`;
