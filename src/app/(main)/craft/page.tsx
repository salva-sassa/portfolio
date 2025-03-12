'use client'

import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from 'next/link'


export default function PortfolioPage() {
  const [isHovered, setIsHovered] = useState(false)
  const [isHoveredLevelling, setIsHoveredLevelling] = useState(false)
  const [isHoveredProdeman, setIsHoveredProdeman] = useState(false)
  const [isHoveredAilessons, setIsHoveredAilessons] = useState(false)
  const [isHoveredHigueras, setIsHoveredHigueras] = useState(false)
  const [isHoveredMavin, setIsHoveredMavin] = useState(false)
  const [isHoveredBazaia, setIsHoveredBazaia] = useState(false)

  return (
    <div className="space-y-8 p-4 md:p-8 md:pt-0">
      <div>
        <h2 className="text-xl lg:text-3xl font-bold mb-2 neue">Projects</h2>
        <div className="w-12 h-1 rounded mb-6" style={{ background: 'linear-gradient(90deg, #ffdb70, #ffbb5c)' }} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="group relative rounded-lg overflow-hidden">
          <div 
            className="relative aspect-video"
            onMouseEnter={() => setIsHoveredLevelling(true)}
            onMouseLeave={() => setIsHoveredLevelling(false)}
          >
            <video
              src="/projects/levellingio_640p.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isHoveredLevelling ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col items-start justify-end h-full p-6">
                <h3 className="text-xl text-white font-bold mb-2">Levelling.io</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Next.js</Badge>
                  <Badge variant="outline" className="bg-primary-foreground text-primary">React</Badge>
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Express</Badge>
                  <Badge variant="outline" className="bg-primary-foreground text-primary">WebSockets</Badge>
                </div>
              </div>
            </div>
            {!isHoveredLevelling && (
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                <p className="text-xs text-white">Levelling.io</p>
                <p className="text-xs text-zinc-300">March 2025</p>
              </div>
            )}
          </div>
          <div className="flex">
            <Button variant="secondary" size="sm" className="flex-1 rounded-none border-r hover:bg-zinc-200 dark:hover:bg-zinc-900 border-gray-300 dark:border-gray-950" asChild>
              <Link href="/craft/levellingio">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="group relative rounded-lg overflow-hidden">
            <div 
              className="relative aspect-video"
              onMouseEnter={() => setIsHoveredBazaia(true)}
              onMouseLeave={() => setIsHoveredBazaia(false)}
            >
              <video
                src="/projects/bazaia_640.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isHoveredBazaia ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex flex-col items-start justify-end h-full p-6">
                  <h3 className="text-xl text-white font-bold mb-2">Bazaia IA</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary-foreground text-primary">Next.js</Badge>
                    <Badge variant="outline" className="bg-primary-foreground text-primary">MongoDB</Badge>
                    <Badge variant="outline" className="bg-primary-foreground text-primary">Langchain</Badge>
                    <Badge variant="outline" className="bg-primary-foreground text-primary">Auth0</Badge>
                  </div>
                </div>
              </div>
              {!isHoveredBazaia && (
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                  <p className="text-xs text-white">Bazaia IA</p>
                  <p className="text-xs text-zinc-300">January 2025</p>
                </div>
              )}
            </div>
            <div className="flex">
              <Button variant="secondary" size="sm" className="flex-1 rounded-none border-r hover:bg-zinc-200 dark:hover:bg-zinc-900 border-gray-300 dark:border-gray-950" asChild>
                <Link href="/craft/bazaia-ia">Learn More</Link>
              </Button>
              <Button variant="secondary" size="sm" className="flex-1 rounded-none hover:bg-zinc-200 dark:hover:bg-zinc-900" asChild>
                <a href="https://bazaia.com" target="_blank" rel="noopener noreferrer">Visit</a>
              </Button>
            </div>
        </div>

        <div className="group relative rounded-lg overflow-hidden">
          <div 
            className="relative aspect-video"
            onMouseEnter={() => setIsHoveredProdeman(true)}
            onMouseLeave={() => setIsHoveredProdeman(false)}
          >
            <video
              src="/projects/prodeman_blur.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isHoveredProdeman ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col items-start justify-end h-full p-6">
                <h3 className="text-xl text-white font-bold mb-2">Prdmn App</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Django</Badge>
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Celery</Badge>
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Langchain</Badge>
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Docker</Badge>
                </div>
              </div>
            </div>
            {!isHoveredProdeman && (
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                <p className="text-xs text-white">Prdmn App</p>
                <p className="text-xs text-zinc-300">April 2024</p>
              </div>
            )}
          </div>
          <div className="flex">
            <Button variant="secondary" size="sm" className="flex-1 rounded-none border-r hover:bg-zinc-200 dark:hover:bg-zinc-900 border-gray-300 dark:border-gray-950" asChild>
              <Link href="/craft/prodeman-app">Learn More</Link>
            </Button>
            <Button variant="secondary" size="sm" className="flex-1 rounded-none hover:bg-zinc-200 dark:hover:bg-zinc-900" asChild>
              <a href="https://prodeman-dev.mavin.com.ar/en/" target="_blank" rel="noopener noreferrer">Visit</a>
            </Button>
          </div>
        </div>

        <div className="group relative rounded-lg overflow-hidden">
          <div 
            className="relative aspect-video"
            onMouseEnter={() => setIsHoveredAilessons(true)}
            onMouseLeave={() => setIsHoveredAilessons(false)}
          >
            <video
              src="/projects/ailessons2_640p.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isHoveredAilessons ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col items-start justify-end h-full p-6">
                <h3 className="text-xl text-white font-bold mb-2">AI lessons SaaS</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Django</Badge>
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Celery</Badge>
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Langchain</Badge>
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Docker</Badge>
                </div>
              </div>
            </div>
            {!isHoveredAilessons && (
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                <p className="text-xs text-white">AI lessons SaaS</p>
                <p className="text-xs text-zinc-300">February 2024</p>
              </div>
            )}
          </div>
          <div className="flex">
            <Button variant="secondary" size="sm" className="flex-1 rounded-none border-r hover:bg-zinc-200 dark:hover:bg-zinc-900 border-gray-300 dark:border-gray-950" asChild>
              <Link href="/craft/ailessons-app">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="group relative rounded-lg overflow-hidden">
          <div 
            className="relative aspect-video"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <video
              src="/projects/mindfulness_app_web_640p.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col items-start justify-end h-full p-6">
                <h3 className="text-xl text-white font-bold mb-2">Mindfulness App</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Django</Badge>
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Design</Badge>
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Illustrator</Badge>
                </div>
              </div>
            </div>
            {!isHovered && (
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                <p className="text-xs text-white">Mindfulness App</p>
                <p className="text-xs text-zinc-300">December 2023</p>
              </div>
            )}
          </div>
          <div className="flex">
            <Button variant="secondary" size="sm" className="flex-1 rounded-none border-r hover:bg-zinc-200 dark:hover:bg-zinc-900 border-gray-300 dark:border-gray-950" asChild>
              <Link href="/craft/mindfulness-app">Learn More</Link>
            </Button>
            <Button variant="secondary" size="sm" className="flex-1 rounded-none hover:bg-zinc-200 dark:hover:bg-zinc-900" asChild>
              <a href="https://mindfulnesscba.vercel.app/" target="_blank" rel="noopener noreferrer">Visit</a>
            </Button>
          </div>
        </div>

        <div className="group relative rounded-lg overflow-hidden">
          <div 
            className="relative aspect-video"
            onMouseEnter={() => setIsHoveredHigueras(true)}
            onMouseLeave={() => setIsHoveredHigueras(false)}
          >
            <video
              src="/projects/higueras_640p.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isHoveredHigueras ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col items-start justify-end h-full p-6">
                <h3 className="text-xl text-white font-bold mb-2">Higueras App</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Django</Badge>
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Docker</Badge>
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Design</Badge>
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Illustrator</Badge>
                </div>
              </div>
            </div>
            {!isHoveredHigueras && (
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                <p className="text-xs text-white">Higueras App</p>
                <p className="text-xs text-zinc-300">June 2023</p>
              </div>
            )}
          </div>
          <div className="flex">
            <Button variant="secondary" size="sm" className="flex-1 rounded-none border-r hover:bg-zinc-200 dark:hover:bg-zinc-900 border-gray-300 dark:border-gray-950" asChild>
              <Link href="/craft/higueras-app">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="group relative rounded-lg overflow-hidden">
          <div 
            className="relative aspect-video"
            onMouseEnter={() => setIsHoveredMavin(true)}
            onMouseLeave={() => setIsHoveredMavin(false)}
          >
            <video
              src="/projects/landing_mavin640p.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isHoveredMavin ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col items-start justify-end h-full p-6">
                <h3 className="text-xl text-white font-bold mb-2">Mavin landing</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Django</Badge>
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Tailwind</Badge>
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Photoshop</Badge>
                  <Badge variant="outline" className="bg-primary-foreground text-primary">Illustrator</Badge>
                </div>
              </div>
            </div>
            {!isHoveredMavin && (
              <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                <p className="text-xs text-white">Mavin landing</p>
                <p className="text-xs text-zinc-300">April 2023</p>
              </div>
            )}
          </div>
          <div className="flex">
            <Button variant="secondary" size="sm" className="flex-1 rounded-none border-r hover:bg-zinc-200 dark:hover:bg-zinc-900 border-gray-300 dark:border-gray-950" asChild>
              <Link href="/craft/mavin-landing">Learn More</Link>
            </Button>
            <Button variant="secondary" size="sm" className="flex-1 rounded-none hover:bg-zinc-200 dark:hover:bg-zinc-900" asChild>
              <a href="https://www.mavin.com.ar/work/" target="_blank" rel="noopener noreferrer">Visit</a>
            </Button>
          </div>
        </div>

        
        {/* You can add more project items here */}
      </div>
    </div>
  )
}

