'use client'

import { useParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import { useState, useEffect } from 'react'

const projects = {
  'bazaia-ia': {
    title: 'Bazaia IA',
    description: 'Bazaia IA is a sophisticated SaaS platform that enables users to create stunning AI-generated content including images, videos, and 3D assets. The platform supports multiple input methods, allowing users to generate content via text prompts or by uploading reference images, depending on the AI generative model being used.',
    challenges: 'The main challenges included implementing a flexible architecture to support diverse AI generative models, ensuring efficient storage and retrieval of large prediction files, building a robust payment infrastructure with multiple providers, and developing an intuitive UI that simplifies the complex process of prompt engineering for various AI models.',
    solutions: 'Built the application with Next.js for performance and SEO benefits, utilizing MongoDB for flexible data storage of user profiles and prediction metadata. Large prediction files are efficiently managed through DigitalOcean Spaces buckets. We implemented a sophisticated chatbot using Langchain that assists users in generating effective prompts for different AI models. The platform features a dual-payment system with both Mercado Pago and Stripe integration, while Auth0 provides secure authentication with minimal development overhead.',
    technologies: ['Next.js', 'MongoDB', 'DigitalOcean', 'Langchain', 'Mercado Pago API', 'Stripe', 'Auth0', 'React', 'TypeScript', 'Tailwind CSS'],
    date: 'January 2025',
    link: 'https://bazaia.com'
  },
  'levellingio': {
    title: 'Levelling.io',
    description: 'Levelling.io is an experimental project designed to explore real-time multiplayer game development concepts. The platform demonstrates practical applications of WebSockets, concurrency management, state synchronization between multiple clients, and implementation of efficient data structures for game development.',
    challenges: 'The primary challenges included establishing reliable real-time communication between multiple clients, ensuring consistent state synchronization across different devices, handling concurrent user interactions without conflicts, and optimizing data structures for performant gameplay even with multiple connected users.',
    solutions: 'We implemented a dual-architecture approach with Next.js and React powering the frontend UI layer, while Phaser served as the game engine. The backend was built with Express, leveraging Socket.io for WebSocket communication to enable real-time multiplayer functionality. This architecture allowed for efficient state management and seamless synchronization between players, creating a responsive and consistent gaming experience.',
    technologies: ['Next.js', 'React', 'Express', 'WebSockets', 'Socket.io', 'Phaser', 'JavaScript'],
    date: 'March 2025',
    link: null
  },
  'prodeman-app': {
    title: 'Prdmn App',
    description: 'Prdmn App is a platform designed to manage HR operations efficiently, enhancing task completion rates by 40%. The app integrates real-time processing and intelligent job matching to streamline large-scale company administration.',
    challenges: 'The main challenge was designing a scalable system capable of handling complex HR workflows while ensuring an intuitive user experience. Building a comprehensive landing page with multiple sections to address diverse user needs added an additional layer of complexity.',
    solutions: "We utilized Django for backend development, Celery for task management, and Langchain for intelligent job matching and real-time data processing. A feature-rich landing page was designed with multiple sections, supporting seamless navigation and showcasing the platform's key features. User-friendly interfaces were also developed for forms and role-based permissions tailored to HR needs.",
    technologies: ['Django', 'Celery', 'Langchain', 'Docker', 'PostgreSQL', 'Redis', 'React'],
    date: 'April 2024',
    link: 'https://prodeman-dev.mavin.com.ar/en/'
  },
  'ailessons-app': {
    title: 'AI Lessons App',
    description: 'AI Lessons App is an innovative SaaS platform that revolutionizes educational content creation. It empowers teachers to generate theoretical content for their subjects in schools or universities based on their program. The app supports student groups, customized content, practical exercises, and exams.',
    challenges: 'The main challenges included creating an intuitive interface for teachers to input their curriculum and generate relevant content, ensuring the AI-generated content was accurate and aligned with educational standards, and managing the scalability of the system to handle multiple users and content generation requests.',
    solutions: 'We leveraged Django for the robust backend, integrated Celery for managing asynchronous tasks like content generation, and utilized Langchain for advanced natural language processing to create context-aware educational content. Docker was employed for easy deployment and scalability, while PostgreSQL ensured efficient data management for user profiles, content, and exam results.',
    technologies: ['Django', 'Celery', 'Langchain', 'PostgreSQL', 'Docker'],
    date: 'February 2024',
    link: null
  },
  'mindfulness-app': {
    title: 'Mindfulness & Trekking Experience',
    description: 'A complete brand and digital presence crafted for a unique mindfulness and trekking entrepreneurship based in La Cumbrecita, Córdoba. This project combines the serenity of nature with the benefits of guided mindfulness practices.',
    challenges: 'The primary challenge was creating a cohesive brand identity that resonated with the tranquility and adventure of the experience. Additionally, the landing page needed to integrate multimedia elements like illustrations, videos, and a booking system seamlessly while maintaining a high-performance and visually appealing interface.',
    solutions: `We brought the client's vision to life by designing a custom brand identity, including logo, style guidelines, and Instagram visuals. A visually rich landing page was developed with illustrations, immersive imagery, and integrated video content. The booking system was tailored for weekend mindfulness and trekking trips, ensuring an intuitive user experience.`,
    technologies: ['Django', 'PostgreSQL', 'Illustrator', 'Figma', 'Vercel'],
    date: 'December 2023',
    link: 'https://mindfulnesscba.vercel.app/'
  },
  'higueras-app': {
  title: 'Higueras Municipality App',
  description: 'The Higueras Municipality App is a complete redesign of the previous platform, focusing on a modern, user-friendly interface with improved UI/UX. The app simplifies the procedures for citizens and enhances the management experience for administration. It also integrates a weather API for real-time updates and includes basic CRUD functionalities.',
  challenges: 'The main challenge was redesigning the entire app to improve the user experience while maintaining all existing functionalities. It was essential to make administrative tasks easier and more efficient, while ensuring the platform remained accessible to the citizens. Additionally, integrating the weather API seamlessly into the interface posed some technical hurdles.',
  solutions: 'We revamped the app with a new design, focusing on simplicity and ease of use. The new UI/UX design improves the navigation and accessibility of procedures. CRUD operations were implemented to streamline the management tasks, and the weather API was integrated to provide real-time weather updates for the users. We also added an admin login feature for better control and management of the platform.',
  technologies: ['Django', 'Docker', 'Illustrator', 'Figma'],
  date: 'June 2023',
  link: null
},
'mavin-landing': {
  title: 'Mavin Landing Page',
  description: 'The Mavin Landing Page is the official platform for our company, designed to showcase our projects, expertise, and vision. It serves as a gateway for potential clients and collaborators to explore our work, highlighting our innovative approach and professional capabilities.',
  challenges: 'The main challenges involved designing a landing page that effectively represents our company\'s identity while providing an intuitive and engaging experience. Balancing visual appeal, responsive design, and concise communication of our projects and values was a critical focus.',
  solutions: 'We utilized Django for a robust and dynamic backend, ensuring easy management of showcased projects. Tailwind CSS was used to implement a modern and responsive design. Illustrator and Photoshop supported the creation of custom visuals that align with our brand identity, while animations were added to create an interactive experience. Performance optimizations ensured fast load times across all devices.',
  technologies: ['Django', 'Tailwind', 'Photoshop', 'Illustrator'],
  date: 'April 2023',
  link: 'https://www.mavin.com.ar/work/'
}

}

export default function ProjectPage() {
  const router = useRouter()
  const { project } = useParams()
  const projectData = projects[project as keyof typeof projects]
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const bazaiaImages = [
    '/projects/bazaia/mona.webp',
    '/projects/bazaia/einstein1.webp',
    '/projects/bazaia/einstein2.webp',
    '/projects/bazaia/einstein3.webp',
    '/projects/bazaia/donaldtrump1.webp',
    '/projects/bazaia/donaldtrump2.webp',
    '/projects/bazaia/msbeast.webp',
    '/projects/bazaia/basketfire.webp',
    '/projects/bazaia/text.webp',
    '/projects/bazaia/shoes.webp',
    '/projects/bazaia/pet1.webp',
    '/projects/bazaia/pet2.webp',
  ]

  const bazaiaDescriptions = [
    'Reimagined Mona Gimenez with modern artistic elements',
    'Albert Einstein in an abstract galaxy portrait style',
    'Einstein visualization, detailed stamp',
    'Artistic representation of Einstein painting',
    'Donald Trump pattern card',
    'Trump in japanese style',
    'MrBeast portrayed in a luxury sofa',
    'Basketball engulfed in flames concept',
    'Text generation model creating formatted content',
    'Product visualization of sneaker design concept',
    'Photorealistic cute puppy generated from text description',
    'Pet portrait painting',
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === bazaiaImages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bazaiaImages.length - 1 : prev - 1))
  }

  // Reset loading state when image changes
  useEffect(() => {
    setIsLoading(true)
  }, [currentSlide])

  if (!projectData) {
    return <div className="flex items-center justify-center h-screen">Project not found</div>
  }

  const handleVisitProject = () => {
    if (projectData.link) {
      window.open(projectData.link, '_blank', 'noopener,noreferrer')
    } else {
      toast({
        title: "Not Available",
        description: "This project is currently not available for viewing.",
        duration: 3000,
      })
    }
  }

  return (
    <div className="space-y-6 p-4 md:p-8 md:pt-0">
      <Button 
        variant="ghost" 
        onClick={() => router.back()} 
        className="mb-2"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
      </Button>
      
      <div className="space-y-4">
        <h1 className="text-xl lg:text-3xl font-bold">{projectData.title}</h1>
        <div className="w-20 h-1 rounded" style={{ background: 'linear-gradient(90deg, #ffdb70, #ffbb5c)' }} />
        <p className="text-sm lg:text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">{projectData.description}</p>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-lg lg:text-2xl font-semibold">Challenges</h2>
        <p className="text-sm lg:text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">{projectData.challenges}</p>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-lg lg:text-2xl font-semibold">Solutions</h2>
        <p className="text-sm lg:text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">{projectData.solutions}</p>
      </div>

      {project === 'levellingio' && (
        <div className="space-y-4">
          <h2 className="text-lg lg:text-2xl font-semibold">Game Assets</h2>
          <p className="text-sm lg:text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            All game assets were designed using Figma, allowing for clean geometric UI elements and collectible items that maintain visual consistency across the game environment.
          </p>
          <div className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
            <img 
              src="/projects/levelling_figma.webp" 
              alt="Levelling.io Figma assets" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}

      {project === 'bazaia-ia' && (
        <div className="space-y-4">
          <h2 className="text-lg lg:text-2xl font-semibold">AI Predictions</h2>
          <p className="text-sm lg:text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            Bazaia IA enables users to create stunning AI-generated content. Below are examples of predictions generated through our platform, showcasing the quality and diversity of outputs from various AI models.
          </p>
          <div className="relative overflow-hidden rounded-lg bg-zinc-100 dark:bg-[#131312] aspect-[16/9]">
            {/* Loading overlay */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 bg-opacity-50 dark:bg-opacity-50 z-10">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            {/* Current image */}
            <img 
              src={bazaiaImages[currentSlide]} 
              alt={`Bazaia IA prediction example ${currentSlide + 1}`} 
              className="w-full h-full object-contain transition-opacity duration-300"
              onLoad={() => setIsLoading(false)}
            />
            
            {/* Image description */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
              <div className="bg-black/70 text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm max-w-[80%] text-center">
                {bazaiaDescriptions[currentSlide]}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={prevSlide} 
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={nextSlide} 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Dots indicator */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
              {bazaiaImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'bg-white scale-110' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <h2 className="text-lg lg:text-2xl font-semibold">Technologies Used</h2>
        <div className="text-sm lg:text-base flex flex-wrap gap-2">
          {projectData.technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-3 py-1  rounded-full text-xs lg:text-sm bg-secondary text-secondary-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-border dark:border-zinc-600">
        <Button onClick={handleVisitProject}>
          Visit Project
        </Button>
        <p className="text-xs lg:text-sm dark:text-zinc-400 text-zinc-600">
          <strong>Completed:</strong> {projectData.date}
        </p>
      </div>
    </div>
  )
}

