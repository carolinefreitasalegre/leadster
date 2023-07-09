import React from "react";
import Image from "next/image";
import CardImg from "../../../../public/thumbnail.svg";
import { Container } from "../style";
import { Card } from "./style";

export default function Agencias() {
  return (
    <Container>
      <Card>
        <Image src={CardImg} alt="Imagem do Vídeo" />
        <Image src={CardImg} alt="Imagem do Vídeo" />
        <Image src={CardImg} alt="Imagem do Vídeo" />
        <Image src={CardImg} alt="Imagem do Vídeo" />
        <Image src={CardImg} alt="Imagem do Vídeo" />
        <Image src={CardImg} alt="Imagem do Vídeo" />
        <Image src={CardImg} alt="Imagem do Vídeo" />
        <Image src={CardImg} alt="Imagem do Vídeo" />
        <Image src={CardImg} alt="Imagem do Vídeo" />
      </Card>
    </Container>
  );
}
