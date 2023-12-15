import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
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
      <body>
        <Navbar />
        <Container>
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
