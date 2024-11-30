import Image from 'next/image'

export default function PortfolioPage() {
  return (
    <div className="space-y-8 p-8 md:pt-0">
      <div>
        <h2 className="text-3xl font-bold mb-2">Portfolio</h2>
        <div className="w-12 h-1 rounded mb-6" style={{ background: 'linear-gradient(90deg, #ffdb70, #ffbb5c)' }} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="group relative">
          <div className="relative overflow-hidden rounded-lg border border-[#383838]">
            <Image
              src="/placeholder.svg"
              alt="AI Chat Application"
              width={600}
              height={400}
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col items-start justify-end h-full p-6">
                <h3 className="text-xl font-bold mb-2">AI Chat Application</h3>
                <p className="text-zinc-300 text-sm">Next.js, TypeScript, OpenAI</p>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative">
          <div className="relative overflow-hidden rounded-lg border border-[#383838]">
            <Image
              src="/placeholder.svg"
              alt="E-commerce Platform"
              width={600}
              height={400}
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col items-start justify-end h-full p-6">
                <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                <p className="text-zinc-300 text-sm">React, Node.js, MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}