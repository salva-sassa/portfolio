export default function Home() {
  return (
    <div className="space-y-8 p-8 md:pt-0">
      <div>
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <div className="w-12 h-1 rounded mb-6" style={{ background: 'linear-gradient(90deg, #ffdb70, #ffbb5c)' }} />
        <p className="text-zinc-400 leading-relaxed">
          I'm a Full-stack Developer from Argentina with 2+ years of experience, currently leading a team to build scalable, AI-powered image generation tools. My expertise lies in fine-tuning models and integrating machine learning into web applications to create practical, real-world solutions.
        </p>
        <p className="text-zinc-400 leading-relaxed mt-4">
          I focus on building efficient software that solves complex problems, ensuring high performance and usability at every stage of development.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">What I&apos;m Doing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="dark:bg-[#121212] p-6 rounded-lg border border-[#383838]">
            <div className="flex items-center gap-4">
              <div className="text-4xl bg-gradient-to-r from-[#ffdb70] to-[#ffbb5c] bg-clip-text text-transparent">🤖</div>
              <div>
                <h3 className="font-semibold mb-2">AI Integration and Development</h3>
                <p className="text-sm text-zinc-400">Designing and implementing AI-based platforms.</p>
              </div>
            </div>
          </div>
          
          <div className="dark:bg-[#121212] p-6 rounded-lg border border-[#383838]">
            <div className="flex items-center gap-4">
              <div className="text-4xl bg-gradient-to-r from-[#ffdb70] to-[#ffbb5c] bg-clip-text text-transparent">👥</div>
              <div>
                <h3 className="font-semibold mb-2">Team Leadership</h3>
                <p className="text-sm text-zinc-400">Managing a team of developers to deliver complex projects.</p>
              </div>
            </div>
          </div>

          <div className="dark:bg-[#121212] p-6 rounded-lg border border-[#383838]">
            <div className="flex items-center gap-4">
              <div className="text-4xl bg-gradient-to-r from-[#ffdb70] to-[#ffbb5c] bg-clip-text text-transparent">{'</>'}</div>
              <div>
                <h3 className="font-semibold mb-2">Web Development</h3>
                <p className="text-sm text-zinc-400">Developing high-quality, scalable web applications.</p>
              </div>
            </div>
          </div>
          
      
        </div>
      </div>
    </div>
  )
}

