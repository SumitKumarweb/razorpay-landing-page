// Also added more engaging visuals and structure.
"use client"

import { Button } from "@/components/ui/button"

import { Check, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ProductHighlights() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden text-white">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-0"></div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Section 1: Payment Gateway */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-semibold rounded-full mb-6">
              Payment Gateway
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Accept payments <br /> with <span className="text-primary">unmatched speed</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Give your customers the smoothest checkout experience with our industry-leading payment gateway. Reliable,
              secure, and designed for conversion.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "100+ Payment Modes including UPI, Cards, Netbanking",
                "Industry Leading Success Rate (99.9%)",
                "Superior Checkout Experience",
                "Easy to Integrate in < 30 mins",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-200">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              className="bg-primary hover:bg-blue-600 text-white font-bold h-12 px-8 rounded-full group"
            >
              Sign Up Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-500/30 blur-2xl rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2 shadow-2xl">
              {/* Placeholder for Payment Gateway Visualization */}
              <div className="bg-slate-800 rounded-xl overflow-hidden aspect-[4/3] relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <img
                    src={`/generic-fantasy-character.png?height=40&width=40&query=avatar-0`}
                    alt="User"
                    className="object-cover w-full h-full opacity-80"
                    width="600"
                    height="500"
                  />
                </div>
                {/* Overlay Elements */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">Transaction Status</p>
                    <p className="text-green-400 font-bold flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Successful
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Amount</p>
                    <p className="text-white font-bold text-lg">₹ 5,400.00</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 2: RazorpayX */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-green-400/20 to-blue-500/20 blur-2xl rounded-3xl transform -rotate-3"></div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Product Dashboard"
                className="w-full h-auto relative z-10 rounded-2xl shadow-2xl border border-white/10"
              />
            <motion.div
              className="absolute -right-6 bottom-12 z-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-[220px]"
              whileInView={{ y: [0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-lg">
                  ₹
                </div>
                <div>
                  <p className="text-xs text-gray-500">Payroll Processed</p>
                  <p className="text-sm font-bold text-gray-900">Success</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-semibold rounded-full mb-6">
              RazorpayX Banking
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Business Banking <br /> that puts you in <span className="text-green-400">control</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Automate your financial operations with a fully-featured current account. Manage payroll, payouts, and
              compliance from a single dashboard.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Instant Payouts to Vendors & Employees (24x7)",
                "Automated Payroll & Compliance",
                "Current Accounts with Higher Limits",
                "Corporate Cards with Rewards",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-200">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/30 hover:bg-white/10 font-bold bg-transparent h-12 px-8 rounded-full"
            >
              Explore RazorpayX →
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Slanted Bottom Divider for next section */}
      <div className="absolute -bottom-1 left-0 right-0 h-16 md:h-24 bg-white clip-path-slant-inverse z-20"></div>
      <style jsx global>{`
        .clip-path-slant-inverse {
          clip-path: polygon(0 100%, 100% 100%, 0 0);
        }
      `}</style>
    </section>
  )
}
