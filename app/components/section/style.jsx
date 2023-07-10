import styled from "styled-components";

export const Container = styled.div`
  background-color: #f0f8ff;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  h1,
  h5 {
    color: rgb(44, 131, 251);
    color: linear-gradient(
      -45deg,
      rgba(44, 131, 251, 1) 35%,
      rgba(31, 118, 240, 1) 69%
    );
  }
  .text-les {
    text-align: center;
    border: none;
    width: 100%;
    font-size: 3rem;
    font-weight: 600;
  }
  h5 {
    width: 12rem;
    text-align: center;
    border: 3px solid #0083fe;
    padding: 5px;
    border-radius: 15px 15px 15px 5px;
  }
  h1 {
    font-size: 5.5rem;
    text-align: center;
    font-weight: 700;
  }
  img {
    width: 7%;
    margin-left: -2rem;
    margin-bottom: 2.5rem;
  }

  .line {
    width: 50%;
    border-bottom: 2px solid #c8d4dd;
  }

  p {
    font-weight: 600;
    font-size: 115%;
  }
`;
