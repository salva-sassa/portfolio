"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSpinStore } from "@/store/UseSpinStore"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const { startSpin } = useSpinStore()

  return (
    <div className="rounded-lg relative">
      <nav className="sticky w-fit ml-auto top-0 right-0 flex gap-6 bg-[#1e1e1f]/95 backdrop-blur-sm rounded-b-lg rounded-br-none bg-white border-l border-b dark:border-none text-gray-900 dark:bg-[#121212] dark:text-zinc-100 px-6 py-3">
        <Link
          onClick={startSpin} 
          href="/" 
          className={`${pathname === '/' ? 'dark:bg-gradient-to-r dark:from-[#f5ca48] dark:to-[#ffbb5c] bg-gradient-to-r from-[#6f6f6f] to-[#3C3C3C] bg-clip-text text-transparent font-semibold' : 'text-zinc-400 font-semibold'} hover:text-[#636363] dark:hover:text-[#f5ca48] transition-colors`}
        >
          About
        </Link>
        <Link
          onClick={startSpin} 
          href="/resume" 
          className={`${pathname === '/resume' ? 'dark:bg-gradient-to-r dark:from-[#f5ca48] dark:to-[#ffbb5c] bg-gradient-to-r from-[#6f6f6f] to-[#3C3C3C] bg-clip-text text-transparent font-semibold' : 'text-zinc-400 font-semibold'} hover:text-[#636363] dark:hover:text-[#f5ca48] transition-colors`}
        >
          Resume
        </Link>
        <Link
          onClick={startSpin} 
          href="/portfolio" 
          className={`${pathname === '/portfolio' ? 'dark:bg-gradient-to-r dark:from-[#f5ca48] dark:to-[#ffbb5c] bg-gradient-to-r from-[#6f6f6f] to-[#3C3C3C] bg-clip-text text-transparent font-semibold' : 'text-zinc-400 font-semibold'} hover:text-[#636363] dark:hover:text-[#f5ca48] transition-colors`}
        >
          Portfolio
        </Link>
        <Link
          onClick={startSpin} 
          href="/contact" 
          className={`${pathname === '/contact' ? 'dark:bg-gradient-to-r dark:from-[#f5ca48] dark:to-[#ffbb5c] bg-gradient-to-r from-[#6f6f6f] to-[#3C3C3C] bg-clip-text text-transparent font-semibold' : 'text-zinc-400 font-semibold'} hover:text-[#636363] dark:hover:text-[#f5ca48] transition-colors`}
        >
          Contact
        </Link>
      </nav>
      {children}
    </div>
  )
}