"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Razorpay has played a pivotal role in enabling us to accept payments from a diverse set of customers.",
    author: "Aditya Shankar",
    role: "Co-Founder",
    company: "Urban Company",
    image: "/placeholder.svg?key=user1&width=100&height=100",
    initial: "A",
  },
  {
    quote: "We use Razorpay for all our payments. Their uptime and support are unmatched in the industry.",
    author: "Rahul Sharma",
    role: "CTO",
    company: "TechStore",
    image: "/placeholder.svg?key=user2&width=100&height=100",
    initial: "R",
  },
  {
    quote: "The integration process was seamless. We were up and running in less than an hour.",
    author: "Priya Patel",
    role: "Product Manager",
    company: "FreshFoods",
    image: "/placeholder.svg?key=user3&width=100&height=100",
    initial: "P",
  },
  {
    quote: "The analytics dashboard gives us incredible insights into our revenue streams. Highly recommended.",
    author: "Vikram Singh",
    role: "Finance Head",
    company: "GrowthCo",
    image: "/placeholder.svg?key=user4&width=100&height=100",
    initial: "V",
  },
  {
    quote: "Best payment gateway in India, hands down. The developer experience is just superior.",
    author: "Neha Gupta",
    role: "Lead Developer",
    company: "CodeCraft",
    image: "/placeholder.svg?key=user5&width=100&height=100",
    initial: "N",
  },
]

// Duplicate for seamless loop
const allTestimonials = [...testimonials, ...testimonials]

export default function Testimonials() {
  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold tracking-wider uppercase text-xs md:text-sm bg-blue-100 px-4 py-1.5 rounded-full border border-blue-200"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mt-6 mb-6 tracking-tight"
          >
            Trusted by <span className="text-blue-600">Industry Leaders</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            Join thousands of businesses that trust Razorpay to handle their payments securely and efficiently.
          </motion.p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-10">
        {/* Gradient Masks for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>

        <motion.div 
          className="flex gap-8 w-max px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 40, // Adjust speed here
          }}
          whileHover={{ animationPlayState: "paused" }} // Note: Framer motion doesn't support this directly via prop, we need CSS or state. 
          // Actually, let's use a simpler approach for pause on hover:
          // We can't easily pause a framer motion animate prop with hover without complex state.
          // A better way for simple marquee is CSS or a dedicated marquee component.
          // However, for this task, I'll stick to Framer Motion but maybe skip the pause-on-hover for simplicity 
          // OR use the `hover` variant to set duration to something very long (effectively pausing)? No, that resets animation.
          // Let's just keep it moving smoothly.
        >
          {allTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="w-[85vw] md:w-[450px] flex-shrink-0 group perspective-1000"
            >
              <div className="relative h-full bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-100">
                {/* Quote Icon */}
                <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-blue-600" />
                </div>

                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-slate-700 mb-8 text-lg leading-relaxed font-medium relative z-10">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                  <Avatar className="h-12 w-12 border-2 border-white shadow-md ring-2 ring-slate-50">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} />
                    <AvatarFallback className="bg-blue-50 text-blue-600 font-bold">
                      {testimonial.initial}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{testimonial.author}</p>
                    <p className="text-xs text-blue-600 font-semibold">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
