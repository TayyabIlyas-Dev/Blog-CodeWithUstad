import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code-With-Ustaad ",
  description: "A Blog For Coders Created by Coder",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
   
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/></body>
    </html>
  );
}
