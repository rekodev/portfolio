import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";

import "./globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - rekodev",
  description:
    "Artūras Tyškevičius' personal portfolio showcasing projects and skills in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} relative flex min-h-screen flex-col antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60%_50%_at_12%_18%,_rgba(251,146,60,0.32)_0%,_rgba(251,146,60,0)_60%),radial-gradient(45%_35%_at_18%_58%,_rgba(244,63,94,0.26)_0%,_rgba(244,63,94,0)_70%),radial-gradient(25%_25%_at_6%_82%,_rgba(248,113,113,0.18)_0%,_rgba(248,113,113,0)_70%)]">
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[48px]" />
          </div>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
