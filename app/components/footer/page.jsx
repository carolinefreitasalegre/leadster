import React from "react";
import { Container, Paragraph } from "./style";
import Link from "next/link";

export default function Footer() {
  return (
    <Container>
      <Paragraph>
        Copyright © 20015 - 2022 Todos os direitos reservados |
        <Link href="">Leadster</Link>
      </Paragraph>
      <Paragraph>
        Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos
        de uso
      </Paragraph>
    </Container>
  );
}
