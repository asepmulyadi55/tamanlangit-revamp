import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taman Langit",
  description: "Taman Langit - Tempat Wisata Terbaik",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
