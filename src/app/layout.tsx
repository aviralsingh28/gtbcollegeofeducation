import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GTB College Of Education",
  description: "Guru Teg Bahadur College, Bilaspur - Providing quality technical and professional education.",
  icons: {
    icon: [
      {
        url: "/faviconimage.png",
        type: "image/png",
        sizes: "any",
      },
    ],
    apple: "/faviconimage.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <div className="flex-1 pt-[120px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
