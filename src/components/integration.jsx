"use client"

import { Button } from "@/components/ui/button"
import { Check, Copy, Code, Terminal, Play, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const techStack = [
  { name: "React", color: "bg-blue-500", x: -20, y: -20, delay: 0 },
  { name: "Node.js", color: "bg-green-500", x: 20, y: -40, delay: 1 },
  { name: "Python", color: "bg-yellow-500", x: -30, y: 30, delay: 2 },
  { name: "Java", color: "bg-red-500", x: 30, y: 20, delay: 1.5 },
  { name: "PHP", color: "bg-indigo-500", x: 0, y: -50, delay: 0.5 },
  { name: "Go", color: "bg-cyan-500", x: -40, y: 0, delay: 2.5 },
]

export default function Integration() {
  const [copied, setCopied] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(`<script src="https://checkout.razorpay.com/v1/checkout.js"></script>`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const runSimulation = () => {
    setIsRunning(true)
    setTimeout(() => {
      setIsRunning(false)
      setIsSuccess(true)
      setTimeout(() => setIsSuccess(false), 3000)
    }, 1500)
  }

  return (
    <section className="py-12 bg-slate-50 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold border border-blue-200 mb-6">
              <Code className="w-4 h-4" />
              <span>Developer Friendly</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Integrate in minutes, <br /> <span className="text-blue-600">not days.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              With our easy-to-use APIs and plugins, you can integrate Razorpay with your website or app effortlessly.
              We support all major platforms and languages.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {["RESTful APIs", "100+ Third-party Plugins", "Mobile SDKs (iOS, Android)", "24x7 Tech Support"].map(
                (feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-medium text-slate-700">{feature}</span>
                  </div>
                ),
              )}
            </div>

            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 font-bold h-14 px-10 rounded-full shadow-xl shadow-blue-600/20 transition-all hover:shadow-blue-600/40 hover:-translate-y-1"
            >
              Read API Docs
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Floating Tech Icons */}
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                className={`hidden md:block absolute z-20 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg ${tech.color}`}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ 
                  x: [0, tech.x, 0], 
                  y: [0, tech.y, 0],
                  opacity: 1
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: tech.delay 
                }}
                style={{ 
                  top: `${50 + Math.random() * 40 - 20}%`, 
                  left: `${50 + Math.random() * 40 - 20}%` 
                }}
              >
                {tech.name}
              </motion.div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform rotate-2 rounded-2xl opacity-20 blur-2xl"></div>
            
            {/* Code Window */}
            <div className="bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-slate-800 relative z-10 backdrop-blur-sm">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-slate-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3 h-3" />
                  integration.js
                </div>
                <div className="w-16"></div> {/* Spacer for balance */}
              </div>

              {/* Code Content */}
              <div className="p-4 md:p-6 overflow-x-auto relative group/code min-h-[300px]">
                <div className="flex">
                  {/* Line Numbers */}
                  <div className="flex flex-col text-right pr-4 text-slate-600 font-mono text-sm select-none border-r border-slate-700/50 mr-4">
                    {[...Array(12)].map((_, i) => (
                      <span key={i} className="leading-relaxed">{i + 1}</span>
                    ))}
                  </div>

                  {/* Code */}
                  <pre className="text-sm font-mono text-slate-300 leading-relaxed flex-1">
                    <code>
                      <span className="text-purple-400">const</span> <span className="text-blue-400">options</span> = {"{"}
                      {"\n"}
                      {"  "}key: <span className="text-green-400">"YOUR_KEY_ID"</span>,
                      {"\n"}
                      {"  "}amount: <span className="text-orange-400">50000</span>,
                      {"\n"}
                      {"  "}currency: <span className="text-green-400">"INR"</span>,
                      {"\n"}
                      {"  "}name: <span className="text-green-400">"Acme Corp"</span>,
                      {"\n"}
                      {"  "}description: <span className="text-green-400">"Test Transaction"</span>,
                      {"\n"}
                      {"  "}image: <span className="text-green-400">"https://example.com/logo"</span>,
                      {"\n"}
                      {"  "}handler: <span className="text-purple-400">function</span>(response) {"{"}
                      {"\n"}
                      {"    "}alert(response.razorpay_payment_id);
                      {"\n"}
                      {"  "}
                      {"}"}
                      {"\n"}
                      {"}"};
                      {"\n"}
                      <span className="text-purple-400">const</span> rzp1 = <span className="text-purple-400">new</span> Razorpay(options);
                    </code>
                  </pre>
                </div>

                {/* Interactive Overlay */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/80 flex items-center justify-center z-20"
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle2 className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-white font-bold text-xl">Integration Successful!</h3>
                        <p className="text-slate-400 text-sm mt-2">Ready to accept payments</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover/code:opacity-100 transition-opacity">
                   <Button
                    size="sm"
                    variant="secondary"
                    className="h-8 bg-green-600/10 text-green-500 hover:bg-green-600/20 border-none"
                    onClick={runSimulation}
                    disabled={isRunning}
                  >
                    <Play className={`w-3 h-3 mr-2 ${isRunning ? 'animate-spin' : ''}`} />
                    {isRunning ? "Running..." : "Run"}
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="h-8 bg-white/10 text-white hover:bg-white/20 border-none"
                    onClick={copyCode}
                  >
                    {copied ? <Check className="w-3 h-3 text-green-400 mr-2" /> : <Copy className="w-3 h-3 mr-2" />}
                    {copied ? "Copied" : "Copy"}
                  </Button>
                </div>
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
