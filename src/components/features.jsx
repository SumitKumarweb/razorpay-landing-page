"use client"

import { motion } from "framer-motion"
import { CreditCard, Globe, Zap, ShieldCheck, PieChart, Smartphone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Instant Activation",
    description: "Get activated instantly with completely online onboarding and minimum documentation.",
    color: "bg-blue-100 text-blue-600",
    hoverColor: "group-hover:bg-blue-600 group-hover:text-white",
    borderColor: "hover:border-blue-200",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "International Payments",
    description: "Accept payments from customers in 100+ currencies with real-time currency conversion.",
    color: "bg-purple-100 text-purple-600",
    hoverColor: "group-hover:bg-purple-600 group-hover:text-white",
    borderColor: "hover:border-purple-200",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant Refunds",
    description: "Provide a superior customer experience with instant refunds directly to source accounts.",
    color: "bg-yellow-100 text-yellow-600",
    hoverColor: "group-hover:bg-yellow-500 group-hover:text-white",
    borderColor: "hover:border-yellow-200",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Secure & Compliant",
    description: "PCI DSS Level 1 compliant solution with 128-bit encryption to keep data safe.",
    color: "bg-green-100 text-green-600",
    hoverColor: "group-hover:bg-green-600 group-hover:text-white",
    borderColor: "hover:border-green-200",
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "Smart Analytics",
    description: "Get real-time insights into your business performance with our powerful dashboard.",
    color: "bg-red-100 text-red-600",
    hoverColor: "group-hover:bg-red-600 group-hover:text-white",
    borderColor: "hover:border-red-200",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Friendly",
    description: "Optimized checkout experience for mobile devices with native UPI integration.",
    color: "bg-indigo-100 text-indigo-600",
    hoverColor: "group-hover:bg-indigo-600 group-hover:text-white",
    borderColor: "hover:border-indigo-200",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Features() {
  return (
    <section className="py-12 bg-white relative overflow-hidden" id="features">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Sticky Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
                <Zap className="w-3 h-3" />
                Why Razorpay?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Features that <span className="text-blue-600">empower</span> your business
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We provide a comprehensive suite of payment solutions designed to help your business grow and succeed in
                the digital economy. Experience the future of payments today.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12 group shadow-lg shadow-blue-600/20 transition-all hover:shadow-blue-600/40">
                View All Features 
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          {/* Grid */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-2/3 grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden ${feature.borderColor}`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                  {feature.icon}
                </div>
                
                <div
                  className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${feature.hoverColor} shadow-sm group-hover:shadow-md group-hover:scale-110`}
                >
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors">
                  {feature.description}
                </p>
                
                <div className="mt-6 flex items-center text-sm font-medium text-blue-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Learn more <ArrowRight className="ml-1 w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
