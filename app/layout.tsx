import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Green Kerala Volunteers - Environmental NGO",
  description: "A volunteer-driven environmental movement working on conservation, cleanup, and climate resilience across Kerala.",
  keywords: "Kerala, environment, volunteers, NGO, conservation, cleanup, climate, sustainability",
  openGraph: {
    title: "Green Kerala Volunteers",
    description: "Protecting Kerala's Environment, One Action at a Time",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
