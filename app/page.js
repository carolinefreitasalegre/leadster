"use client";

import Comparative from "./components/comparative/page";
import Footer from "./components/footer/page";
import Header from "./components/header/page";
import Links from "./components/sectioLinks/page";
import Section from "./components/section/page";
import MidiaPage from "./midia/midiapage/page";
import Midia from "./midia/page";

export default function Home() {
  return (
    <>
      <Header />
      <Section />
      <MidiaPage />
      <Comparative />
      <Links />
      <Footer />
    </>
  );
}
