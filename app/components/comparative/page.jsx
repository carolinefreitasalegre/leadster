"use client";
import React from "react";
import { Container, Content, MidiaIndice, TextImg, Midia } from "./style";
import Image from "next/image";
import img from "../../../public/assets/comparativo_img_CTA.svg";
import cartao from "../../../public/assets/no-card-dark.svg";
import start from "../../../public/assets/rating.svg";
import station from "../../../public/assets/selo_RD.svg";

export default function Comparative() {
  return (
    <Container>
      <Image src={img} alt="comparativo" />
      <Content>
        <h2>Pronto para triplicar sua</h2>
        <h1>Geração de Leads?</h1>
        <p>
          Criação e ativação em <strong>4 minutos.</strong>
        </p>
        <span className="line"></span>

        <Midia>
          <MidiaIndice>
            <button>VER DEMONSTRAÇÃO</button>
            <Image src={station} alt="logo station" />
          </MidiaIndice>

          <TextImg>
            <p className="card-text">
              <Image src={cartao} alt="img cartão de credito" />
              Não é necessário Cartão de Crédito
            </p>
            <span>|</span>
            <p className="star-text">
              <Image src={start} alt="estrelas" />
              4.9/5média de satisfação
            </p>
          </TextImg>
        </Midia>
      </Content>
    </Container>
  );
}
