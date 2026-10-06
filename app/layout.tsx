import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caerphilly Accounting",
  description: "Accounting and business support for individuals and small businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={geistSans.variable}>
      <body>
        <Link
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border-2 focus:border-black focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to main content
        </Link>
        <Header />
        <main id="main">{children}</main>
        <Footer />

      </body>
    </html>
  );
}