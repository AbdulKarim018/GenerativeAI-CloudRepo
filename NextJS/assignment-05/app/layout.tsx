import type { Metadata } from "next";
import "./globals.css";
import { Libre_Bodoni, Rye } from "next/font/google";

export const metadata: Metadata = {
  title: "MANZZARI - Abdul Karim",
  description: "MANZZARI is Jewelery Brand.",
};

const libre_badoni = Libre_Bodoni({
  weight: ["400", "700"],
});

const rye = Rye({
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${libre_badoni.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
