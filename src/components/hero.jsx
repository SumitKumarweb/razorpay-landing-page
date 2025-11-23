"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion"
import { ArrowRight, CheckCircle2, PlayCircle, MousePointer2 } from "lucide-react"
import { useRef, useState, useEffect } from "react"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top, width, height } = currentTarget.getBoundingClientRect()
    let xPoint = clientX - left - width / 2
    let yPoint = clientY - top - height / 2
    mouseX.set(xPoint)
    mouseY.set(yPoint)
  }

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative bg-white overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-20 min-h-screen flex items-center"
    >
      {/* Dynamic Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -top-[50%] -left-[20%] w-[150%] h-[150%] bg-gradient-to-br from-blue-100 via-purple-100 to-transparent rounded-full blur-3xl opacity-30" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-[20%] right-[0%] w-[800px] h-[800px] bg-gradient-to-bl from-green-100/40 via-blue-100/40 to-transparent rounded-full blur-3xl" 
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            style={{ y: textY, opacity }}
            className="flex flex-col gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 w-fit shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-semibold text-gray-700">#1 Payment Platform in India</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              <RevealText text="Accept payments" delay={0.4} />
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-primary bg-300% animate-gradient">
                <RevealText text="seamlessly." delay={0.8} />
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed"
            >
              Supercharge your business with the all-in-one payment suite. Accept payments, automate payouts, and manage
              finances with ease.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="bg-[#02042B] hover:bg-blue-900 text-white font-bold h-14 sm:h-16 px-8 rounded-2xl shadow-xl shadow-blue-900/20 text-lg group relative overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Sign Up Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-gray-700 border-gray-200 hover:bg-gray-50 h-14 sm:h-16 px-8 rounded-2xl bg-white/50 backdrop-blur-sm font-medium text-lg group w-full sm:w-auto"
              >
                <PlayCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform text-primary" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="flex items-center gap-6 mt-8"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.1, zIndex: 10 }}
                    className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 relative overflow-hidden shadow-lg"
                  >
                    <img
                      src={`/generic-fantasy-character.png?height=48&width=48&query=avatar-${i}`}
                      alt="User"
                      className="object-cover w-full h-full"
                      width="48"
                      height="48"
                    />
                  </motion.div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.svg 
                      key={i} 
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.8 + (i * 0.1) }}
                      className="w-5 h-5 text-yellow-400 fill-current" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
                <p className="text-sm text-gray-500 font-medium">Trusted by 5M+ businesses</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visuals - 3D Interactive Card */}
          <div className="relative lg:h-[700px] w-full flex items-center justify-center perspective-1000">
            <ParallaxCard mouseX={mouseX} mouseY={mouseY} />
          </div>
        </div>
      </div>
    </section>
  )
}

function RevealText({ text, delay }) {
  return (
    <span className="inline-block">
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block mr-[0.2em] overflow-hidden">
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.1,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

function ParallaxCard({ mouseX, mouseY }) {
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])
  
  const cardX = useSpring(rotateX, { stiffness: 100, damping: 30 })
  const cardY = useSpring(rotateY, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      style={{
        rotateX: cardX,
        rotateY: cardY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-[90%] max-w-[300px] sm:max-w-[400px] md:max-w-[550px] aspect-square mx-auto"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-200/50 to-purple-200/50 rounded-full blur-[100px] -z-10 animate-pulse-soft"></div>

      {/* Main Dashboard Card */}
      <motion.div
        className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden z-10"
       >
        <div className="h-14 border-b border-gray-100 bg-white/50 flex items-center px-6 gap-2 justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="text-xs font-medium text-gray-400">razorpay.com/dashboard</div>
        </div>
        <div className="p-8">
          <div className="flex justify-between items-center mb-10">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Total Revenue</p>
              <h3 className="text-4xl font-bold text-gray-900 tracking-tight">$1,245,890</h3>
            </div>
            <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
              +12.5% <ArrowRight className="w-3 h-3 -rotate-45" />
            </span>
          </div>
          
          {/* Interactive Chart */}
          <div className="h-48 flex items-end gap-3 mb-10">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-blue-50 rounded-t-xl relative group overflow-hidden cursor-pointer"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ scaleY: 1.05 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-blue-500 to-blue-400 opacity-80 group-hover:opacity-100 transition-opacity"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                />
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 + (i * 0.2) }}
                className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer border border-transparent hover:border-gray-100"
              >
                <div
                  className={`w-12 h-12 rounded-full ${i === 1 ? "bg-orange-100 text-orange-600" : "bg-purple-100 text-purple-600"} flex items-center justify-center font-bold text-xl`}
                >
                  {i === 1 ? "S" : "N"}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900">
                    {i === 1 ? "Stripe Inc." : "Netflix Subscription"}
                  </p>
                  <p className="text-sm text-gray-500">Today, 2:45 PM</p>
                </div>
                <span className="font-bold text-gray-900 text-lg">+$240.00</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating Elements with Parallax */}
      <motion.div
        className="absolute -right-16 bottom-32 z-50 w-72 bg-gray-900/95 backdrop-blur-md rounded-2xl p-6 text-white shadow-2xl border border-white/10"
        style={{ transform: "translateZ(150px)" }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-start mb-8">
          <div className="w-10 h-6 bg-yellow-500/80 rounded"></div>
          <img src="/visa-application-process.png" width="48" height="24" alt="Visa" className="opacity-80" />
        </div>
        <div className="space-y-4">
          <div className="flex gap-2">
            <div className="w-20 h-2.5 bg-gray-600 rounded-full"></div>
            <div className="w-10 h-2.5 bg-gray-600 rounded-full"></div>
          </div>
          <div className="flex justify-between items-center pt-2">
            <p className="font-mono text-lg tracking-widest text-gray-300">**** 4242</p>
            <p className="text-xs text-gray-400 font-medium">EXP 12/28</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -left-12 top-32 z-50 bg-white p-4 pr-6 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-4"
        style={{ transform: "translateZ(120px)" }}
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-inner">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900">Payment Received</p>
          <p className="text-xs text-gray-500 font-medium">Just now • $450.00</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
