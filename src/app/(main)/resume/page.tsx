import { Book } from 'lucide-react'

export default function ResumePage() {
  return (
    <div className="space-y-8 p-8 pt-0">
      <div>
        <h2 className="text-3xl font-bold mb-2">Resume</h2>
        <div className="w-12 h-1 rounded mb-6" style={{ background: 'linear-gradient(90deg, #ffdb70, #ffbb5c)' }} />
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Book className="w-6 h-6" style={{ color: '#ffdb70' }} />
          <h3 className="text-2xl font-bold">Experience</h3>
        </div>

        <div className="space-y-8">
          {/* Timeline items */}
          <div className="relative pl-8 border-l border-[#383838]">
            <div className="absolute w-3 h-3 bg-[#ffdb70] rounded-full -left-[6.5px] top-2" />
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">AI Integration Specialist</h4>
              <div className="text-[#ffdb70]">Tech Solutions Inc.</div>
              <div className="text-zinc-400">January 2023 — Present</div>
              <ul className="list-disc list-inside space-y-2 text-zinc-400">
                <li>Developed and implemented AI-powered features for enterprise applications</li>
                <li>Led a team of 4 developers in creating machine learning models</li>
                <li>Improved system efficiency by 40% through AI automation</li>
              </ul>
            </div>
          </div>

          <div className="relative pl-8 border-l border-[#383838]">
            <div className="absolute w-3 h-3 bg-[#ffdb70] rounded-full -left-[6.5px] top-2" />
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Full Stack Developer</h4>
              <div className="text-[#ffdb70]">Web Innovators</div>
              <div className="text-zinc-400">June 2022 — December 2022</div>
              <ul className="list-disc list-inside space-y-2 text-zinc-400">
                <li>Built responsive web applications using Next.js and TypeScript</li>
                <li>Implemented RESTful APIs and database integrations</li>
                <li>Collaborated with UX designers to create intuitive user interfaces</li>
              </ul>
            </div>
          </div>

          <div className="relative pl-8 border-l border-[#383838]">
            <div className="absolute w-3 h-3 bg-[#ffdb70] rounded-full -left-[6.5px] top-2" />
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Junior Developer</h4>
              <div className="text-[#ffdb70]">Digital Solutions Co.</div>
              <div className="text-zinc-400">January 2022 — May 2022</div>
              <ul className="list-disc list-inside space-y-2 text-zinc-400">
                <li>Assisted in developing front-end components using React</li>
                <li>Participated in code reviews and team meetings</li>
                <li>Learned and implemented modern web development practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

