import type { Metadata } from "next";
import {
  Work_Sans,
  Spline_Sans_Mono,
} from 'next/font/google';import "./globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";

import {cookies} from "next/headers";
import { COLOR_THEME_COOKIE_NAME } from "@/app/constants";



export type Theme = "light" | "dark";

const mainFont = Work_Sans({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});
const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
});


export const metadata: Metadata = {
  title: "Sam's Blog",
  description: "Technical Summary, Sharing Development Experience.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const savedTheme = (await cookies()).get(
    COLOR_THEME_COOKIE_NAME
  );
  const theme = (savedTheme?.value as Theme) || "light";
  return (
    <html lang="en" className={`min-h-full min-w-full ${mainFont.variable} ${monoFont.variable} ${theme}`}>
      <body
        className="antialiased"
      >
        <Header initialTheme={theme}/>
        <main className="relative">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
