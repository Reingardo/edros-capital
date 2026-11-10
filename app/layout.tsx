import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EdRos Capital | Mentoría en trading y análisis de inversiones",
  description: "Mentoría individual en trading y análisis de inversiones con Edgar Rosales. Tecnología, innovación y gestión del riesgo.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>;
}
