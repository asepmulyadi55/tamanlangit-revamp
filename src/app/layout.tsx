import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taman Langit Pangalengan - Premium Camping & Nature Tourism",
  description: "Destinasi camping premium di ketinggian 1.670 mdpl dengan panorama 360° yang memukau. Rasakan pengalaman alam yang tak terlupakan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-inter text-gray-800 bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
