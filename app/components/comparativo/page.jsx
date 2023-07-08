import React from "react";
import { Container, Content, Midia, TextImg, MidiaIndice } from "./style";
import Image from "next/image";
import img from "../../../public/comparativo_img_CTA.svg";
import cartao from "../../../public/no-card-dark.svg";
import start from "../../../public/rating.svg";
import station from "../../../public/selo_RD.svg";

export default function Comparativo() {
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
