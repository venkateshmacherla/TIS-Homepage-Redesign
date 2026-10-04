import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tulas International School | TIS",
  description:
    "Discover Tulas International School — a modern learning environment focused on academics, sports, character and global perspective.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
