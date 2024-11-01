import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  weight: "400",
  variable: "--font-comfortaa",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Soudemy - Abdul Karim",
  description: "Soudemy is a platform for learning and teaching.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} antialiased`}>{children}</body>
    </html>
  );
}
