"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { value: "100+", label: "Currencies Supported" },
  { value: "5Mn+", label: "Businesses Trusted" },
  { value: "99.9%", label: "System Uptime" },
  { value: "$50Bn+", label: "Annual TPV" },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-12 bg-primary/5 relative overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-gray-200/50">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${index % 2 !== 0 ? "pl-4 md:pl-0" : "pr-4 md:pr-0"} md:px-0`} // simple layout fix for borders
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-2 text-primary tracking-tight">{stat.value}</h3>
              <p className="text-gray-600 font-medium text-sm uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
