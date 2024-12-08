'use client'

import { useParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

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
    title: 'Mindfulness App',
    description: 'The Mindfulness App is a digital wellness platform designed to help users cultivate mindfulness and reduce stress through guided meditations and exercises. It features a clean, intuitive interface created with Django and custom illustrations.',
    challenges: 'The main challenge was creating a seamless, distraction-free user experience that would encourage regular practice. We also needed to ensure the app could handle audio streaming efficiently and provide offline access to content.',
    solutions: 'We designed a minimalist UI with custom illustrations to create a calming environment. We implemented progressive web app features for offline access and used efficient audio streaming techniques to ensure smooth playback of guided meditations.',
    technologies: ['Django', 'React', 'Docker', 'PostgreSQL', 'AWS S3', 'Illustrator'],
    date: 'December 2023',
    link: 'https://mindfulnesscba.vercel.app/'
  }
}

export default function ProjectPage() {
  const router = useRouter()
  const { project } = useParams()
  const projectData = projects[project as keyof typeof projects]

  if (!projectData) {
    return <div className="flex items-center justify-center h-screen">Project not found</div>
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
        <Button asChild>
          <a href={projectData.link} target="_blank" rel="noopener noreferrer">Visit Project</a>
        </Button>
        <p className="text-sm text-muted-foreground">
          <strong>Completed:</strong> {projectData.date}
        </p>
      </div>
    </div>
  )
}

