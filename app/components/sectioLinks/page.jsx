"use client";

import React from "react";
import { Container, Content, LogoInfo, InfoLink, List, Pages } from "./style";
import Image from "next/image";
import Logo from "../../../public/assets/logo.svg";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";

export default function Links() {
  return (
    <Container>
      <LogoInfo>
        <Image src={Logo} alt="Logo Leadster" />
        <p>Transformando visitas em clientes.</p>
      </LogoInfo>
      <Content>
        <InfoLink>
          <h1>Links Principais</h1>
          <List>
            <Link href="">Home</Link>
            <Link href="">Ferramenta</Link>
            <Link href="">Preços</Link>
            <Link href="">Contato</Link>
          </List>
        </InfoLink>

        <InfoLink>
          <h1>Cases</h1>
          <List>
            <Link href="">Geração de Leads B2B</Link>
            <Link href="">Geração de Leads em Software</Link>
            <Link href="">Geração de Leads em Imobiliária</Link>
            <Link href="">Cases de Sucesso</Link>
          </List>
        </InfoLink>

        <InfoLink>
          <h1>Materiais</h1>
          <List>
            <Link href="">Blog</Link>
            <Link href="">Parceria com Agências</Link>
            <Link href="">Guia Definitivo do Marketing</Link>
            <Link href="">Materiais Gratuitos</Link>
          </List>
        </InfoLink>

        <InfoLink>
          <h1>Siga a Leadster</h1>
          <Pages>
            <Link href="">
              <FaLinkedinIn />
            </Link>
            <Link href="">
              <FaFacebookF />
            </Link>
            <Link href="">
              <BsInstagram />
            </Link>
          </Pages>
          <Link href="">E-mail: contato@leadster.com.br</Link>
          <p>Telefone: (42) 98828-9851</p>
        </InfoLink>
      </Content>
    </Container>
  );
}
