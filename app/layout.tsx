import type { Metadata, Viewport } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sumaiya Talukder | Fullstack MERN Developer",
  description:
    "Fullstack MERN Developer open to hire. Building scalable web applications with Next.js, React, Node.js, and MongoDB. Based in Bangladesh.",
  keywords: [
    "Fullstack Developer",
    "MERN",
    "React",
    "Next.js",
    "Node.js",
    "open to hire",
    "Bangladesh",
  ],
  authors: [{ name: "Sumaiya Talukder" }],
  openGraph: {
    title: "Sumaiya Talukder | Fullstack MERN Developer",
    description: "Fullstack MERN Developer open to hire. Building scalable web applications.",
    type: "website",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f1419" },
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${cormorant.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
