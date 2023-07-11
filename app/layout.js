"use client";

import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}
