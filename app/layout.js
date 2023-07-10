import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/public/favicon.icon" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
