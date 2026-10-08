import "./globals.css";

export const metadata = {
  title: "AHU BATAK",
  description: "Hita Batak, Hita Parsaoran.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
