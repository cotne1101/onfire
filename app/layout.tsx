import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OnFire",
  description:
    "It's a fast website that tells everyone about forest fires so we can stop them quickly! ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="p-5 max-w-5xl mx-auto">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
