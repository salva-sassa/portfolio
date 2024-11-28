import type { Metadata } from "next";
import { poppins } from '@/app/ui/fonts';
import "./globals.css";
import Image from 'next/image';
import ProfileCard from "./components/ProfileCard";
import ThemeProvider from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";
import RotatingLogo from "./components/RotatingLogo";

export const metadata: Metadata = {
  title: "Salvador Sassatelli - Portfolio",
  description: "Full-stack IA focused developer",
  icons: {
    icon: [
      { url: '/favicon-dark.ico', media: '(prefers-color-scheme: dark)' },
      { url: '/favicon-light.ico', media: '(prefers-color-scheme: light)' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased bg-gray-100 text-gray-900 dark:bg-[#121212] dark:text-zinc-100 flex items-center justify-center min-h-screen p-4`}
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          themes={['light', 'dark']}
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          <div className="max-w-7xl w-full h-full md:h-[calc(80vh-2rem)] mb-[15vh] grid grid-cols-1 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-7 gap-8">
            <div className="relative bg-white dark:bg-[#1e1e1f] rounded-lg border h-fit sm:col-span-4 sm md:col-span-3 lg:col-span-2 border-gray-200 dark:border-[#383838] shadow-md">
              <RotatingLogo />
              {/* ProfileCard */}
              <ProfileCard />
            </div>
            <div
              className="bg-white dark:bg-[#1e1e1f] rounded-lg border border-gray-200 dark:border-[#383838] sm:col-span-4 md:col-span-5 lg:col-span-5 overflow-y-auto shadow-md"
            >
              {children}
            </div>
          </div>
          <div className="fixed top-4 right-4">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}