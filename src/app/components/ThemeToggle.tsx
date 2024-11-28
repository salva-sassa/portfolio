'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    // Update favicon based on theme
    if (isMounted) {
      const faviconLink = document.querySelector("link[rel~='icon']") as HTMLLinkElement
      if (faviconLink) {
        faviconLink.href = resolvedTheme === 'dark' 
          ? '/favicon-dark.ico' 
          : '/favicon-light.ico'
      }
    }
  }, [resolvedTheme, isMounted])

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  // Prevent rendering until mounted to avoid hydration mismatches
  if (!isMounted) {
    return null
  }

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-800" />
      )}
    </button>
  )
}