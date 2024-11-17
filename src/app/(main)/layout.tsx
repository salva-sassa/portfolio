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
    <div className="bg-[#1e1e1f] rounded-lg p-8 pt-16 relative">
      <nav className="absolute top-0 right-0 flex gap-6 bg-[#1e1e1f]/95 backdrop-blur-sm rounded-b-lg rounded-br-none bg-black px-6 py-3">
        <Link 
          href="/" 
          className={`${pathname === '/' ? 'bg-gradient-to-r from-[#ffdb70] to-[#ffbb5c] bg-clip-text text-transparent' : 'text-zinc-400'} hover:text-[#ffdb70] transition-colors`}
        >
          About
        </Link>
        <Link 
          href="/resume" 
          className={`${pathname === '/resume' ? 'bg-gradient-to-r from-[#ffdb70] to-[#ffbb5c] bg-clip-text text-transparent' : 'text-zinc-400'} hover:text-[#ffdb70] transition-colors`}
        >
          Resume
        </Link>
        <Link 
          href="/portfolio" 
          className={`${pathname === '/portfolio' ? 'bg-gradient-to-r from-[#ffdb70] to-[#ffbb5c] bg-clip-text text-transparent' : 'text-zinc-400'} hover:text-[#ffdb70] transition-colors`}
        >
          Portfolio
        </Link>
        <Link 
          href="/contact" 
          className={`${pathname === '/contact' ? 'bg-gradient-to-r from-[#ffdb70] to-[#ffbb5c] bg-clip-text text-transparent' : 'text-zinc-400'} hover:text-[#ffdb70] transition-colors`}
        >
          Contact
        </Link>
      </nav>
      {children}
    </div>
  )
}