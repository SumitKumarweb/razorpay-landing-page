"use client"

const companies = [
  "Acme Corp",
  "Global Tech",
  "Nebula",
  "Tessera",
  "Vertex",
  "Orbit",
  "Horizon",
  "Apex",
  "Quantum",
  "Pinnacle",
]

export default function TrustedBy() {
  return (
    <section className="py-12 border-b border-gray-100 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <p className="text-center text-gray-500 font-semibold text-sm uppercase tracking-wider">
          Trusted by 5,000,000+ Businesses
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...companies, ...companies].map((company, i) => (
            <div
              key={i}
              className="mx-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
            >
              <span className="text-2xl font-bold text-gray-400 font-sans">{company}</span>
            </div>
          ))}
        </div>
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
          {[...companies, ...companies].map((company, i) => (
            <div
              key={i}
              className="mx-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
            >
              <span className="text-2xl font-bold text-gray-400 font-sans">{company}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  )
}
