export default function Home() {
  return (
    <>
    <div className="space-y-8 p-4 md:p-8 md:pt-0">
      <div>
        <h2 className="text-2xl lg:text-3xl neue font-bold mb-2">About Me</h2>
        <div className="w-12 h-1 rounded mb-6" style={{ background: 'linear-gradient(90deg, #ffdb70, #ffbb5c)' }} />
        <p className="text-sm lg:text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
          Full-stack developer from Argentina with 3+ years of experience building scalable apps, tools, and products.
        </p>
        <p className="text-sm lg:text-base dark:text-zinc-400 text-zinc-600 leading-relaxed mt-4">
        Hands-on in every stage of the product lifecycle: designing interfaces, developing features, deploying applications, and collaborating with clients to deliver effective solutions.
        </p>
      </div>

      <div>
        <div className="grid lg:grid-cols-2 gap-6">

        <div className="dark:bg-[#121212] p-6 rounded-lg border dark:border-[#383838] border-[#b9b5b5]">
            <div className="flex items-center gap-4">
              <div className="text-4xl bg-gradient-to-r from-[#ffdb70] to-[#ffbb5c] bg-clip-text text-transparent">🎨</div>
              <div>
                <h3 className="font-semibold mb-2">Design</h3>
                <p className="text-xs lg:text-sm dark:text-zinc-400 text-zinc-600">Creating intuitive and high-performance UI/UX experiences</p>
              </div>
            </div>
          </div>

          <div className="dark:bg-[#121212] p-6 rounded-lg border dark:border-[#383838] border-[#b9b5b5]">
            <div className="flex items-center gap-4">
              <div className="text-4xl bg-gradient-to-r from-[#ffdb70] to-[#ffbb5c] bg-clip-text text-transparent">{'</>'}</div>
              <div>
                <h3 className="font-semibold mb-2">Development</h3>
                <p className="text-xs lg:text-sm dark:text-zinc-400 text-zinc-600">Developing high-quality, scalable web applications.</p>
              </div>
            </div>
          </div>

          <div className="dark:bg-[#121212] p-6 rounded-lg border dark:border-[#383838] border-[#b9b5b5]">
            <div className="flex items-center gap-4">
              <div className="text-4xl bg-gradient-to-r from-[#ffdb70] to-[#ffbb5c] bg-clip-text text-transparent">🤖</div>
              <div>
                <h3 className="font-semibold mb-2">API Design & Integration</h3>
                <p className="text-xs lg:text-sm dark:text-zinc-400 text-zinc-600">Building efficient APIs and integrating third-party services.</p>
              </div>
            </div>
          </div>
        
          <div className="dark:bg-[#121212] p-6 rounded-lg border dark:border-[#383838] border-[#b9b5b5]">
            <div className="flex items-center gap-4">
              <div className="text-4xl bg-gradient-to-r from-[#ffdb70] to-[#ffbb5c] bg-clip-text text-transparent">👥</div>
              <div>
                <h3 className="font-semibold mb-2">Collaboration</h3>
                <p className="text-xs lg:text-sm dark:text-zinc-400 text-zinc-600">Working closely with clients and teams to transform ideas into effective solutions.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    </>
  )
}

