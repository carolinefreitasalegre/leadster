import { styled } from "styled-components";

export const Container = styled.div`
  height: 1015px;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .line {
    margin-top: 1.2rem;
    width: 65%;
    border: 1.5px solid #d5d9dd;
  }
`;
export const Content = styled.div`
  margin-top: 65px;
  width: 68%;
  display: flex;
  justify-content: space-around;
`;
export const ButtonLink = styled.div`
  display: flex;
  gap: 10px;
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  border: 2px solid #466071;
  border-radius: 20px;
  height: 35px;
  padding: 0 10px;
  color: #466071;
  cursor: pointer;

  &:hover {
    border: 2px solid #0077f4;
    color: #0077f4;
  }
`;

export const SelectBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  select {
    padding: 4px;
    height: 2rem;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
  }
`;

export const Paragraph = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  font-weight: bold;
  width: 100%;
  color: #1c3c50;
  margin-top: 1rem;
  font-size: 1.1rem;
  margin-bottom: 4rem;

  a {
    text-decoration: none;
    color: #1c3c50;
    padding: 5px 11px;
    border-radius: 5px;
    border: 2px solid transparent;

    &:hover {
      color: #0077f4;
      border: 2px solid #0077f4;
    }
  }
`;
