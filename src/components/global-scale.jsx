"use client"

import { motion } from "framer-motion"
import { Globe, Zap, Shield, TrendingUp } from "lucide-react"

const stats = [
  { label: "Countries", value: "15+", icon: Globe, color: "text-blue-400" },
  { label: "Transactions", value: "50M+", icon: Zap, color: "text-yellow-400" },
  { label: "Uptime", value: "99.9%", icon: Shield, color: "text-green-400" },
  { label: "Growth", value: "120%", icon: TrendingUp, color: "text-purple-400" },
]

export default function GlobalScale() {
  return (
    <section className="py-12 text-gray-900 relative overflow-hidden min-h-[800px] flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-gray-900">
                Global Scale, <br /> Local Reach.
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Empowering businesses across borders with a unified payment infrastructure. 
                Seamlessly accept payments in 100+ currencies.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`p-2 rounded-lg bg-gray-50 ${stat.color} group-hover:scale-110 transition-transform`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-gray-500 text-sm uppercase tracking-wider font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content - Holographic Globe Visualization */}
          <div className="lg:w-1/2 relative h-[500px] w-full flex items-center justify-center perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-[400px] h-[400px]"
            >
              {/* Core Globe */}
              <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
              <div className="absolute inset-10 rounded-full border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.3)]" />
              
              {/* Rotating Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                  className={`absolute inset-${i * 8} rounded-full border border-dashed border-blue-400/20`}
                  style={{ borderTopColor: "transparent", borderLeftColor: "transparent" }}
                />
              ))}

              {/* Orbiting Nodes */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-full h-2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear", delay: i }}
                >
                  <div className="absolute right-0 w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(96,165,250,0.8)]" />
                </motion.div>
              ))}

               {/* Central Hologram */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 backdrop-blur-md border border-white/50 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30 animate-spin-slow" />
                    <Globe className="w-24 h-24 text-blue-600" />
                  </div>
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
