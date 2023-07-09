import { useState } from "react";
import {
  Container,
  Content,
  ButtonLink,
  Button,
  SelectBtn,
  Paragraph,
} from "./style";
import Agencias from "./agencias/page";
import Link from "next/link";

export default function Midia() {
  const options = [
    { value: "data", label: "Data de Publicação" },
    { value: "nome", label: "Ordenar por Nome" },
    { value: "vanilla", label: "Mais Vistos" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container>
      <Content>
        <ButtonLink>
          <Button>Agência</Button>
          <Button>Chatbox</Button>
          <Button>Marketing Digital</Button>
          <Button>Geração de Leads</Button>
          <Button>Midia Page</Button>
        </ButtonLink>
        <SelectBtn>
          Ordernar por
          <select value={selectedOption} onChange={handleChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </SelectBtn>
      </Content>
      <span className="line"></span>
      <Agencias />
      <span className="line"></span>

      {/* linha e numeros */}
      <Paragraph>
        Página
        <Link href="">1</Link>
        <Link href="">2</Link>
        <Link href="">3</Link>
        <Link href="">4</Link>
      </Paragraph>
    </Container>
  );
}
