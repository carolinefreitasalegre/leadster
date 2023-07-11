"use client";
import StyledComponentsRegistry from "../app/lib/resistry";

import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>

        <link rel="icon" href="/favicon.webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}
