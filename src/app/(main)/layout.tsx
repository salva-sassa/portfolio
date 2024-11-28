"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()

  return (
    <div className="rounded-lg p-8 pt-16 relative">
      <nav className="absolute top-0 right-0 flex gap-6 bg-[#1e1e1f]/95 backdrop-blur-sm rounded-b-lg rounded-br-none bg-white border-l border-b dark:border-none text-gray-900 dark:bg-[#121212] dark:text-zinc-100 px-6 py-3">
        <Link 
          href="/" 
          className={`${pathname === '/' ? 'dark:bg-gradient-to-r dark:from-[#f5ca48] dark:to-[#ffbb5c] bg-gradient-to-r from-[#6f6f6f] to-[#3C3C3C] bg-clip-text text-transparent font-semibold' : 'text-zinc-400 font-semibold'} hover:text-[#636363] dark:hover:text-[#f5ca48] transition-colors`}
        >
          About
        </Link>
        <Link 
          href="/resume" 
          className={`${pathname === '/resume' ? 'dark:bg-gradient-to-r dark:from-[#f5ca48] dark:to-[#ffbb5c] bg-gradient-to-r from-[#6f6f6f] to-[#3C3C3C] bg-clip-text text-transparent font-semibold' : 'text-zinc-400 font-semibold'} hover:text-[#636363] dark:hover:text-[#f5ca48] transition-colors`}
        >
          Resume
        </Link>
        <Link 
          href="/portfolio" 
          className={`${pathname === '/portfolio' ? 'dark:bg-gradient-to-r dark:from-[#f5ca48] dark:to-[#ffbb5c] bg-gradient-to-r from-[#6f6f6f] to-[#3C3C3C] bg-clip-text text-transparent font-semibold' : 'text-zinc-400 font-semibold'} hover:text-[#636363] dark:hover:text-[#f5ca48] transition-colors`}
        >
          Portfolio
        </Link>
        <Link 
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