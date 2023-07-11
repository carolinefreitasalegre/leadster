"use client";

import { styled } from "styled-components";

export const Container = styled.div`
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 3rem;
  justify-content: space-evenly;
`;

export const LogoInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 0.7rem;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const InfoLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h1 {
    width: 100%;
    font-size: 1rem;
  }
  p {
    text-align: justify;
    width: 100%;
    color: grey;
  }

  a {
    text-decoration: none;
    color: grey;
  }
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  a {
    text-decoration: none;
    color: grey;
  }
`;
export const Pages = styled.div`
  display: flex;
  width: 100%;
  gap: 2px;
  font-size: 1.2rem;
  color: grey;

  a {
    background-color: red;
    width: 1.8rem;
    height: 1.7rem;
    display: flex;
    border-radius: 50%;
    background-color: #f7f8fb;

    align-items: center;
    justify-content: center;
  }
`;
