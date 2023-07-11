import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 100%;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 35px;
  width: 87%;
  height: 100%;
  margin-top: 3rem;
`;

export const CardMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 18rem;
  height: 15rem;
  gap: 5px;

  border-radius: 0 0 10px 10px;
  box-shadow: 2px 2px 20px grey;

  p {
    color: #1c3c50;
    padding: 5px;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
`;
