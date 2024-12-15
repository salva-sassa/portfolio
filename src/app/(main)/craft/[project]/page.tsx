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

