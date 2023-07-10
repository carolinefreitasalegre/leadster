"use client";
import React from "react";
import Image from "next/image";
import { Container } from "./style";
import Detalhe from "../../../public/assets/asset-header.svg";

export default function Section() {
  return (
    <>
      <Container>
        <h5>WEBINARS EXCLUSIVOS</h5>
        <p className="text-les">Menos Conversinha,</p>
        <h1>
          Mais Conversão
          <span>
            <Image src={Detalhe} alt="img detalhe" />
          </span>
        </h1>
        <span className="line"></span>
        <p>
          Conheça as estratégias que <strong>mudaram o jogo</strong> e como
          aplicá-las no seu negócio
        </p>
      </Container>
      ;
    </>
  );
}
