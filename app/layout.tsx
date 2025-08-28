import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Joey's Page",
  description: "Hi, my name is Joey Zhu and this is my personal page, welcome!",
  icons: "/profile_icon.png", // TODO: better icon?
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.className}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
