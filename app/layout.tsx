import React from "react";
import {Outfit} from "next/font/google"
import type { Metadata } from "next";
import "./globals.css"

const outfit = Outfit({ subsets: ['latin'],weight: ["400", "700"], variable: "--font-outfit"});


export const metadata: Metadata = {
    title: "Entertainment",
    description: "Your Search Ends Here!",
    icons: {
        icon: "./assets/logo.svg",
    }
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={`${outfit.variable}`}>
          {children}
        </body>
      </html>
    );
  }