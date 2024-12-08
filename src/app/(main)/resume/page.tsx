import { Briefcase, GraduationCap, type LucideIcon } from 'lucide-react'

type TimelineItemProps = {
  title: string
  company: string
  date: string
  responsibilities?: string[]
}

type SectionProps = {
  title: string
  icon: LucideIcon
  items: TimelineItemProps[]
}

export default function ResumePage() {
  const experienceItems: TimelineItemProps[] = [
    {
      title: "Team Leader",
      company: "Mavin",
      date: "2024 - Present",
      responsibilities: [
        "Lead development of SaaS for fine-tuning image generation models",
        "Implement user authentication with Auth0 and payment integration with Mercado Pago",
        "Build with Next.js, React, Tailwind, MongoDB, Auth0, Replicate API, and Mercado Pago API",
        "Oversee development of AI-powered article generation SaaS using Django, Celery, FastAPI, Tailwind, and LangChain"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Mavin",
      date: "2024",
      responsibilities: [
        "Develop SaaS for AI-powered article generation",
        "Create web application for generating titles and complete articles based on client-requested topics",
        "Create AI Lessons, an AI-powered educational platform using Django, Celery, Tailwind, and Docker",
      ]
    },
    {
      title: "Junior Developer",
      company: "Mavin",
      date: "February 2023 - 2024",
      responsibilities: [
        "Develop Darwash, a livestock management system with Django, PostgreSQL, and Tailwind",
        "Build company landing page using Django and Tailwind"
      ]
    }
  ]

  const educationItems: TimelineItemProps[] = [
    {
      title: "System Engineering",
      company: "Universidad Tecnológica Nacional, Córdoba",
      date: "2021 - Present",
      responsibilities: [
        "Currently in the third year of a five-year program"
      ]
    },
    {
      title: "High School Diploma",
      company: "La Merced School",
      date: "Graduated 2020"
    }
  ]

  return (
    <div className="space-y-8 p-4 md:p-8 md:pt-0">
      <div>
        <h2 className="text-3xl font-bold mb-2">Resume</h2>
        <div className="w-12 h-1 rounded mb-6" style={{ background: 'linear-gradient(90deg, #ffdb70, #ffbb5c)' }} />
      </div>

      <Section title="Experience" icon={Briefcase} items={experienceItems} />
      <Section title="Education" icon={GraduationCap} items={educationItems} />
    </div>
  )
}

function Section({ title, icon: Icon, items }: SectionProps) {
  return (
    <div className="space-y-6 px-2">
      <div className="flex items-center gap-2">
        <Icon className="w-6 h-6" style={{ color: '#ffdb70' }} />
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div className="space-y-8">
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ title, company, date, responsibilities = [] }: TimelineItemProps) {
  return (
    <div className="relative pl-8 border-l border-[#383838]">
      <div className="absolute w-3 h-3 bg-[#ffdb70] rounded-full -left-[6.5px] top-2" />
      <div className="space-y-2">
        <h4 className="text-lg font-semibold">{title}</h4>
        <div className="text-[#ffdb70]">{company}</div>
        <div className="text-zinc-400">{date}</div>
        {responsibilities.length > 0 && (
          <ul className="list-disc list-inside space-y-2 text-zinc-400">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

