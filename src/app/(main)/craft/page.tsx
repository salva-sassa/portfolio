'use client'

import { useState } from 'react'
import { Badge } from "@/components/ui/badge"

export default function PortfolioPage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="space-y-8 p-8 md:pt-0">
      <div>
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <div className="w-12 h-1 rounded mb-6" style={{ background: 'linear-gradient(90deg, #ffdb70, #ffbb5c)' }} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div 
          className="group relative rounded-lg border border-[#383838] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <video
            src="/projects/mindfulness_app_web.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-start justify-end h-full p-6">
              <h3 className="text-xl font-bold mb-2">Mindfulness App</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Digital Ocean</Badge>
              </div>
            </div>
          </div>
          {!isHovered && (
            <div className="absolute bottom-2 left-2">
              <p className="text-xs text-white">Mindfulness App</p>
            </div>
          )}
        </div>

        {/* You can add more project items here */}
      </div>
    </div>
  )
}

