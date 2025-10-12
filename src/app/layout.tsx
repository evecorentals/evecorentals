import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EvEco Rentals",
  description: "Affordable EV Rentals for Everyone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
