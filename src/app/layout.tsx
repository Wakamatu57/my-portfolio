import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WAKAMATUのポートフォリオ',
  description: 'WAKAMATUの自己紹介、スキル、資格などを記載',
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
