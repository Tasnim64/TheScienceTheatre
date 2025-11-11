import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Science Theatre",
  description: "SCIENCE COMMUNICATION COMPETITION",
  icons: {
    icon: "/STFAVICON.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">

      <head>
        {/* Inter font from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/STFAVICON.ico?v=2" />

      </head>

      <body className="bg-[#050505] text-[#c0b3ff] font-[Inter,sans-serif] antialiased tracking-wide leading-relaxed">
        {/* Background */}
        <div
          className="fixed inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center brightness-50"
        />

        {/* Foreground */}
        <div className="relative min-h-screen backdrop-blur-[.5px] px-4 sm:px-5">
          <Navbar />
          <main className="space-y-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
