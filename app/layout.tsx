import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./ui/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "aisha singh",
  description: "a website by aisha singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        {children}
      <footer className="footer">
        created by aisha singh, with create-next-app
      </footer>
      </body>
    </html>
  );
}
