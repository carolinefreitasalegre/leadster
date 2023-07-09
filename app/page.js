"use client";
import Comparative from "./components/comparative/page";
import Footer from "./components/footer/page";
import Header from "./components/header/page";
import Midia from "./components/midia/page";
import Links from "./components/sectioLinks/page";
import Section from "./components/section/page";

export default function Home() {
  return (
    <main>
      <Header />
      <Section />
      <Midia />
      <Comparative />
      <Links />
      <Footer />
    </main>
  );
}
