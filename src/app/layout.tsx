import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "TAPAUU | Guaranteed savings for students. Guaranteed revenue for vendors.",
  description: "TAPAUU is a prepaid meal wallet platform connecting budget-conscious university students to campus hawkers — at below-retail prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${sora.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-[#FAF7F4] text-[#1A1A1A] font-sans selection:bg-[#F26B3A] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
