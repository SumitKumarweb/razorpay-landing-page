"use client"

import { motion } from "framer-motion"

import { UserPlus, FileCheck, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: <UserPlus className="w-5 h-5 text-white" />,
    title: "Sign Up",
    description: "Create your account in minutes.",
    color: "bg-blue-500",
  },
  {
    icon: <FileCheck className="w-5 h-5 text-white" />,
    title: "KYC",
    description: "Paperless verification.",
    color: "bg-green-500",
  },
  {
    icon: <Code2 className="w-5 h-5 text-white" />,
    title: "Integrate",
    description: "Use plugins or APIs.",
    color: "bg-purple-500",
  },
  {
    icon: <Rocket className="w-5 h-5 text-white" />,
    title: "Go Live",
    description: "Start accepting payments.",
    color: "bg-orange-500",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[0%] w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary font-bold tracking-wider uppercase text-xs md:text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Simple Onboarding
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
              Start accepting payments in <br className="hidden md:block" />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                4 simple steps
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've optimized every step of the process so you can focus on building your business, not wrestling with
              paperwork.
            </p>
          </motion.div>
        </div>

        {/* Main Process Visual */}
        <div className="mb-20">
          <motion.div
            className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-2 md:p-4 max-w-5xl mx-auto overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-50/50 rounded-2xl overflow-hidden relative aspect-[16/6] min-h-[300px] flex items-center justify-center group">
              <img
                src="/placeholder.svg?height=600&width=300"
                alt="Mobile App Interface"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay gradient to ensure text readability if needed, though image seems clean */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Tags */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur border border-gray-100 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-gray-800">100% Digital Process</span>
            </div>
          </motion.div>
        </div>

        {/* Steps Grid - Simplified */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 hover:bg-white p-6 rounded-2xl border border-transparent hover:border-blue-100 hover:shadow-lg transition-all duration-300 text-center group cursor-pointer"
            >
              <div
                className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center mb-4 mx-auto shadow-md group-hover:scale-110 transition-transform`}
              >
                {step.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
