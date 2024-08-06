import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "סגנונות תקשורת",
  description: "שאלון ארבעת סגנונות תקשורת.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header">
          <h1>סגנונות תקשורת</h1>
          <button className="menuBtn">אפשרויות</button>
        </header>
        <main className="main">
          {children}
        </main>
        <footer className="footer">קרדיטים</footer>
      </body>
    </html>
  );
}
