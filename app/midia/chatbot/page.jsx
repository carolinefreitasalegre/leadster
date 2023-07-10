"use client";

import { Card, Container, CardContent, CardMedia } from "./style";
import Image from "next/image";
import dados from "../../../public/Json/dados.json";

export default function Chatbot() {
  return (
    <Container>
      <CardContent>
        <Card>
          {dados.map((item) => (
            <CardMedia key={item.id}>
              {
                <a href={item.video}>
                  {
                    <Image
                      className="cardimg"
                      src={item.imagem}
                      alt="Imagem Card"
                      width={286}
                      height={200}
                    />
                  }

                  <p>{item.descricao}</p>
                </a>
              }
            </CardMedia>
          ))}
        </Card>
      </CardContent>
    </Container>
  );
}
