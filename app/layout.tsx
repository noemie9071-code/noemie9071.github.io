import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mon carnet de recettes",
  description: "Recettes faciles, économiques et diet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
