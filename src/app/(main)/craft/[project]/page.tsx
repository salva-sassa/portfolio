'use client'

import { useParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"

const projects = {
  'prodeman-app': {
    title: 'Prodeman App',
    description: 'Prodeman App is a comprehensive solution for managing agricultural operations. It leverages Django for robust backend functionality, Celery for task management, Langchain for natural language processing, and Docker for easy deployment and scalability.',
    challenges: 'One of the main challenges was integrating complex agricultural data processing with an intuitive user interface. We also had to ensure real-time updates and notifications for time-sensitive agricultural operations.',
    solutions: 'We implemented a microservices architecture using Docker to separate concerns and allow for independent scaling of different components. Celery was used to handle background tasks such as data processing and notifications. Langchain was integrated to provide natural language interfaces for complex queries about agricultural data.',
    technologies: ['Django', 'Celery', 'Langchain', 'Docker', 'PostgreSQL', 'Redis', 'React'],
    date: 'April 2024',
    link: 'https://prodeman-dev.mavin.com.ar/en/'
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
  'ailessons-app': {
    title: 'AI Lessons App',
    description: 'AI Lessons App is an innovative SaaS platform that revolutionizes educational content creation. It empowers teachers to generate theoretical content for their subjects in schools or universities based on their program. The app supports student groups, customized content, practical exercises, and exams.',
    challenges: 'The main challenges included creating an intuitive interface for teachers to input their curriculum and generate relevant content, ensuring the AI-generated content was accurate and aligned with educational standards, and managing the scalability of the system to handle multiple users and content generation requests.',
    solutions: 'We leveraged Django for the robust backend, integrated Celery for managing asynchronous tasks like content generation, and utilized Langchain for advanced natural language processing to create context-aware educational content. Docker was employed for easy deployment and scalability, while PostgreSQL ensured efficient data management for user profiles, content, and exam results.',
    technologies: ['Django', 'Celery', 'Langchain', 'PostgreSQL', 'Docker'],
    date: 'February 2024',
    link: null
  }
}

export default function ProjectPage() {
  const router = useRouter()
  const { project } = useParams()
  const projectData = projects[project as keyof typeof projects]

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
        <h1 className="text-3xl font-bold">{projectData.title}</h1>
        <div className="w-20 h-1 rounded" style={{ background: 'linear-gradient(90deg, #ffdb70, #ffbb5c)' }} />
        <p className="text-muted-foreground leading-relaxed">{projectData.description}</p>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Challenges</h2>
        <p className="text-muted-foreground leading-relaxed">{projectData.challenges}</p>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Solutions</h2>
        <p className="text-muted-foreground leading-relaxed">{projectData.solutions}</p>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {projectData.technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground"
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
        <p className="text-sm text-muted-foreground">
          <strong>Completed:</strong> {projectData.date}
        </p>
      </div>
    </div>
  )
}

