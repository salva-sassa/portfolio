"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSpinStore } from "@/store/UseSpinStore"
import { Toaster } from "@/components/ui/toaster"
import { Home, FileText, Briefcase, Mail } from 'lucide-react'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const { startSpin } = useSpinStore()

  const navItems = [
    { href: '/', label: 'About', icon: Home },
    { href: '/resume', label: 'Resume', icon: FileText },
    { href: '/craft', label: 'Craft', icon: Briefcase },
    { href: '/contact', label: 'Contact', icon: Mail },
  ]

  const handleLinkClick = () => {
    startSpin()
    const element = document.getElementById("sections")
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div className="rounded-lg relative md:pb-0">
      {/* Desktop Navbar */}
      <nav className="sticky z-50 w-fit ml-auto top-0 right-0 hidden md:flex gap-6 bg-[#1e1e1f]/95 backdrop-blur-sm rounded-b-lg rounded-br-none bg-white border-l border-b dark:border-none text-gray-900 dark:bg-[#121212] dark:text-zinc-100 px-6 py-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => handleLinkClick()} 
            className={`${pathname === item.href ? 'dark:bg-gradient-to-r dark:from-[#f5ca48] dark:to-[#ffbb5c] bg-gradient-to-r from-[#6f6f6f] to-[#3C3C3C] bg-clip-text text-transparent font-semibold' : 'text-zinc-400 font-semibold'} hover:text-[#636363] dark:hover:text-[#f5ca48] transition-colors`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed z-50 bottom-0 left-0 right-0 md:hidden flex justify-around items-center bg-white dark:bg-[#1e1e1f]/95 backdrop-blur-sm border-t dark:border-none text-gray-900 dark:bg-[#121212] dark:text-zinc-100 px-2 py-3">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              onClick={() => handleLinkClick()} 
              href={item.href} 
              className={`flex flex-col items-center ${pathname === item.href ? 'text-[#f5ca48]' : 'text-zinc-500'} hover:text-[#f5ca48] transition-colors`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          )
        })}
      </nav>
      <div id='sections'>
       {children}
      </div>
      <Toaster />
    </div>
  )
}

