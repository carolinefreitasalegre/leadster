"use client";
import React from "react";
import Image from "next/image";
import { Container } from "./style";
import Logo from "../../../public/assets/logo.svg";

export default function Header() {
  return (
    <>
      <Container>
        <Image src={Logo} alt="logo leadster" />
      </Container>
    </>
  );
}
