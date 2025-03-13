import { GraduationCap, type LucideIcon } from 'lucide-react'

type TimelineItemProps = {
  title: string
  company: string
  date: string
  responsibilities?: string[]
}

type SectionProps = {
  title?: string
  icon?: LucideIcon
  items: TimelineItemProps[]
}

export default function ResumePage() {
  const experienceItems: TimelineItemProps[] = [
    {
      title: "Freelancer",
      company: "Independent",
      date: "March 2025 - Present",
      responsibilities: [
        "Exploring advanced development patterns and system architecture design principles beyond conventional frameworks",
        "Building solutions with scalability, performance optimization, and security as primary considerations"
      ]
    },
    {
      title: "Team Leader",
      company: "Mavin",
      date: "October 2024 - February 2025",
      responsibilities: [
        "Led the development of a SaaS platform for fine-tuning image generation models, including user authentication, payment integration, and frontend/backend development using Next.js, React, Tailwind, MongoDB, and Replicate API.",
        "Managed a team of 3 developers, applying Agile methodology (SCRUM) to plan sprints, manage activities and deadlines in Jira, and ensure timely project delivery.",
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
      date: "February 2023 - January 2024",
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
    <div className="space-y-6 p-4 md:p-8 md:pt-0">
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold mb-2 neue">Resume</h2>
        <div className="w-12 h-1 rounded mb-4 sm:mb-6" style={{ background: 'linear-gradient(90deg, #ffdb70, #ffbb5c)' }} />
      </div>

      <Section items={experienceItems} />
      <Section title="Education" icon={GraduationCap} items={educationItems} />
    </div>
  )
}

function Section({ title, icon: Icon, items }: SectionProps) {
  let lastCompany = "";
  return (
    <div className="space-y-4 px-0 sm:px-2">
      {Icon &&  (
      <div className="flex items-center gap-2">
         <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#ffdb70' }} />
        <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
      </div>
      )}
      <div className="space-y-6">
        {items.map((item, index) => {
          const showCompany = item.company !== lastCompany;
          lastCompany = item.company;
          return <TimelineItem key={index} {...item} showCompany={showCompany} />
        })}
      </div>
    </div>
  )
}

function TimelineItem({ title, company, date, responsibilities = [], showCompany }: TimelineItemProps & { showCompany: boolean }) {
  return (
    <div className="relative pl-4 lg:pl-8 border-l dark:border-[#383838]">
      <div className="absolute w-3 h-3 bg-[#ffdb70] rounded-full -left-[6.5px] top-2" />
      <div className="space-y-2">
        <div className="space-y-1 flex flex-col lg:flex-row md:gap-2 sm:space-y-0">
          <h4 className="text-base lg:text-lg font-semibold">{title}</h4>
          <div className="flex flex-wrap items-center gap-2">
            {showCompany && <div className="text-sm lg:text-base dark:text-[#ffdb70] text-zinc-900">{company}</div>}
            <div className="text-xs lg:text-xs mt-px border rounded-sm py-px px-1 border-zinc-600 dark:text-zinc-400 text-zinc-600">{date}</div>
          </div>
        </div>
        {responsibilities.length > 0 && (
          <ul className="text-sm lg:text-base pl-4 list-disc space-y-2 dark:text-zinc-400 text-zinc-600">
            {responsibilities.map((item, index) => (
              <li key={index} className="ml-1">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

