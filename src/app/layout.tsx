import type { Metadata } from "next";
import { poppins } from '@/app/ui/fonts';
import "./globals.css";
import ProfileCard from "./components/ProfileCard";


export const metadata: Metadata = {
  title: "Salvador Sassatelli - Portfolio",
  description: "Full-stack IA focused developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-[#121212] text-zinc-100 flex items-center justify-center min-h-screen p-4`}
      >
        <div className="max-w-7xl w-full h-full md:h-[calc(80vh-2rem)] mb-[15vh] grid grid-cols-1 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-7 gap-8">
          <div className="bg-[#1e1e1f] rounded-lg border h-fit sm:col-span-4 sm md:col-span-3 lg:col-span-2 border-[#383838]">
            <ProfileCard />
          </div>
          <div
            className="bg-[#1e1e1f] rounded-lg border border-[#383838] sm:col-span-4 md:col-span-5 lg:col-span-5 h-fit"
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
