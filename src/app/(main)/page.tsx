export default function Home() {
  return (
    <div className="space-y-8 p-4 md:p-8 md:pt-0">
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold mb-2">About Me</h2>
        <div className="w-12 h-1 rounded mb-6" style={{ background: 'linear-gradient(90deg, #ffdb70, #ffbb5c)' }} />
        <p className="text-sm lg:text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
          Full-stack developer from Argentina with 2+ years of experience building scalable AI-powered tools. Currently leading a team to advance AI integration in development.
        </p>
        <p className="text-sm lg:text-base dark:text-zinc-400 text-zinc-600 leading-relaxed mt-4">
           Involved in every stage of the product lifecycle, from designing interfaces and developing features to deploying applications and working closely with clients to deliver effective solutions.
        </p>
      </div>

      <div>
        <h2 className="text-xl lg:text-2xl font-bold mb-6">What I&apos;m doing</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="dark:bg-[#121212] p-6 rounded-lg border dark:border-[#383838] border-[#b9b5b5]">
            <div className="flex items-center gap-4">
              <div className="text-4xl bg-gradient-to-r from-[#ffdb70] to-[#ffbb5c] bg-clip-text text-transparent">🤖</div>
              <div>
                <h3 className="font-semibold mb-2">AI Integration and Development</h3>
                <p className="text-xs lg:text-sm dark:text-zinc-400 text-zinc-600">Designing and implementing AI-based platforms.</p>
              </div>
            </div>
          </div>
          
          <div className="dark:bg-[#121212] p-6 rounded-lg border dark:border-[#383838] border-[#b9b5b5]">
            <div className="flex items-center gap-4">
              <div className="text-4xl bg-gradient-to-r from-[#ffdb70] to-[#ffbb5c] bg-clip-text text-transparent">👥</div>
              <div>
                <h3 className="font-semibold mb-2">Team Leadership</h3>
                <p className="text-xs lg:text-sm dark:text-zinc-400 text-zinc-600">Managing a team of developers to deliver complex projects.</p>
              </div>
            </div>
          </div>

          <div className="dark:bg-[#121212] p-6 rounded-lg border dark:border-[#383838] border-[#b9b5b5]">
            <div className="flex items-center gap-4">
              <div className="text-4xl bg-gradient-to-r from-[#ffdb70] to-[#ffbb5c] bg-clip-text text-transparent">{'</>'}</div>
              <div>
                <h3 className="font-semibold mb-2">Web Development</h3>
                <p className="text-xs lg:text-sm dark:text-zinc-400 text-zinc-600">Developing high-quality, scalable web applications.</p>
              </div>
            </div>
          </div>
          
          <div className="dark:bg-[#121212] p-6 rounded-lg border dark:border-[#383838] border-[#b9b5b5]">
            <div className="flex items-center gap-4">
              <div className="text-4xl bg-gradient-to-r from-[#ffdb70] to-[#ffbb5c] bg-clip-text text-transparent">🎨</div>
              <div>
                <h3 className="font-semibold mb-2">Design</h3>
                <p className="text-xs lg:text-sm dark:text-zinc-400 text-zinc-600">Creating intuitive and visually appealing user interfaces.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

