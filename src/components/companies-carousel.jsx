"use client"

import { motion } from "framer-motion"

const companies = [
  "Facebook", "Google", "Amazon", "Flipkart", "Swiggy", "Zomato",
  "Uber", "Ola", "Cred", "BookMyShow", "Microsoft", "Spotify",
  "Razorpay", "Netflix", "Airbnb", "Stripe", "Dropbox", "Slack"
]

const row1 = companies.slice(0, 9)
const row2 = companies.slice(9)

export default function CompaniesCarousel() {
  return (
    <section className="py-12 bg-slate-50 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trusted by <span className="text-blue-600">Industry Leaders</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Join 50,000+ innovative companies that trust our platform to power their payments and financial operations.
        </p>
      </div>

      <div className="relative flex flex-col gap-8">
        {/* Row 1 - Left to Right */}
        <div className="flex overflow-hidden relative z-10">
          <motion.div
            className="flex gap-6 px-6"
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...row1, ...row1, ...row1].map((company, i) => (
              <LogoCard key={`${company}-${i}`} name={company} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex overflow-hidden relative z-10">
          <motion.div
            className="flex gap-6 px-6"
            animate={{ x: [-1000, 0] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...row2, ...row2, ...row2].map((company, i) => (
              <LogoCard key={`${company}-${i}`} name={company} />
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>
      </div>
    </section>
  )
}

function LogoCard({ name }) {
  return (
    <div className="group relative w-32 h-16 md:w-48 md:h-20 bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden">
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Text Logo */}
      <span className="relative z-10 text-sm md:text-xl font-bold text-gray-400 group-hover:text-gray-900 transition-colors duration-300">
        {name}
      </span>
      
      {/* Shine Effect */}
      <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transform skew-x-12 group-hover:animate-shine pointer-events-none"></div>
    </div>
  )
}
