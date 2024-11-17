export default function Home() {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-12 h-1 rounded mb-6" style={{ background: 'linear-gradient(90deg, #ffdb70, #ffbb5c)' }} />
          <p className="text-zinc-400 leading-relaxed">
            I'm a Full-stack Developer based in Argentina, specializing in web development and AI integration. I am passionate about transforming complex problems into simple, elegant, and intuitive designs.
          </p>
          <p className="text-zinc-400 leading-relaxed mt-4">
            My role involves creating websites that are not only functional and user-friendly but also visually appealing. I ensure that each project receives a personal touch, making your product distinctive and engaging. My goal is to convey your message and identity in the most creative and effective manner possible.
          </p>
        </div>
  
        <div>
          <h2 className="text-2xl font-bold mb-6">What I&apos;m Doing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#121212] p-6 rounded-lg border border-[#383838]">
              <div className="flex items-center gap-4">
                <div className="text-4xl bg-gradient-to-r from-[#ffdb70] to-[#ffbb5c] bg-clip-text text-transparent">{'</>'}</div>
                <div>
                  <h3 className="font-semibold mb-2">Web Development</h3>
                  <p className="text-sm text-zinc-400">High-quality development of sites at the professional level.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#121212] p-6 rounded-lg border border-[#383838]">
              <div className="flex items-center gap-4">
                <div className="text-4xl bg-gradient-to-r from-[#ffdb70] to-[#ffbb5c] bg-clip-text text-transparent">📱</div>
                <div>
                  <h3 className="font-semibold mb-2">Responsive Websites</h3>
                  <p className="text-sm text-zinc-400">Convert a website to be accessible on any device.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }