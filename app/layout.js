import "./globals.css";

export const metadata = {
  title: "Avalian CX Command Center",
  description:
    "A conceptual digital experience proposal for Avalian, focused on journey, metrics, and prioritization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
