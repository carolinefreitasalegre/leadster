import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 25px;

  flex-wrap: wrap;
  width: 80%;

  img {
    width: 19rem;
    border-radius: 10px;
    box-shadow: 2px 2px 15px grey;
  }
`;
