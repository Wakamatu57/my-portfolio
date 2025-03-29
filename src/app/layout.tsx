import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "タイトルがはいります",
  description: "説明文がはいります",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}