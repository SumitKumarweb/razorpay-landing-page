import { useRef } from "react"
import { useScroll, useTransform, motion, useSpring, AnimatePresence } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const contents = [
  {
    title: "Accept Payments",
    description:
      "Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital.",
    features: ["100+ Payment Modes", "Industry Leading Success Rate", "Easy Integration"],
    image: "/payment-dashboard-ui-fintech-blue.jpg",
    color: "bg-blue-500", // Kept for shadow/glow reference if needed, but not used as background block
  },
  {
    title: "Payroll",
    description:
      "The only payroll software for startups and SMEs that automates payroll, compliance, and employee benefits.",
    features: ["Automated Tax Calculations", "Direct Salary Deposits", "Insurance & Benefits"],
    image: "/payroll-dashboard-employee-salary-management.jpg",
    color: "bg-indigo-500",
  },
  {
    title: "Start Business Banking",
    description: "A supercharged current account for your business. Pay vendors, check balance, and manage expenses.",
    features: ["Instant Account Activation", "Vendor Payments", "Expense Management"],
    image: "/business-banking-dashboard-graph-analytics.jpg",
    color: "bg-sky-500",
  },
  {
    title: "Get Credit & Loans",
    description:
      "Get instant access to working capital. Collateral-free loans designed for your growing business needs.",
    features: ["No Collateral Required", "Low Interest Rates", "Instant Disbursal"],
    image: "/business-loan-credit-score-growth-chart.jpg",
    color: "bg-purple-500",
  },
]

export default function StickyScrollFeatures() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  })

  const scaleSync = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Adjusted opacities for smoother transitions
  const opacities = contents.map((_, index) => {
    const start = index / contents.length
    const end = (index + 1) / contents.length
    return useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0])
  })

  const ys = contents.map((_, index) => {
    const start = index / contents.length
    const end = (index + 1) / contents.length
    return useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [50, 0, 0, -50])
  })

  const imageOpacities = contents.map((_, index) => {
    const start = index / contents.length
    const end = (index + 1) / contents.length
    return useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0])
  })

  const imageScales = contents.map((_, index) => {
    const start = index / contents.length
    const end = (index + 1) / contents.length
    return useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0.9, 1, 1, 0.9])
  })

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-background">
      {/* Desktop Sticky View */}
      <div className="hidden md:flex sticky top-0 h-screen items-center overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative flex gap-10 items-center justify-between h-full py-12">
          {/* Left Side - Content */}
          <div className="w-1/2 flex flex-col justify-center z-10 relative h-full">
            {contents.map((item, index) => (
              <motion.div
                key={index}
                style={{ opacity: opacities[index], y: ys[index] }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-full max-w-[500px] p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-1 w-12 bg-primary rounded-full" />
                  <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                    Feature {index + 1}
                  </span>
                </div>
                <h2 className="text-5xl font-bold text-foreground mb-6 leading-tight">{item.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{item.description}</p>
                <ul className="space-y-4 mb-8">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="group">
                  Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Images */}
          <div className="w-1/2 h-[600px] relative flex items-center justify-center">
            {contents.map((item, index) => (
              <motion.div
                key={index}
                style={{ opacity: imageOpacities[index], scale: imageScales[index] }}
                className="absolute inset-0 w-full h-full flex items-center justify-center p-4"
              >
                <div className="relative w-full h-full max-h-[500px] group perspective-1000">
                  {/* Glow Effect */}
                  <div
                    className={`absolute -inset-4 ${item.color} opacity-20 blur-3xl rounded-full group-hover:opacity-30 transition-opacity duration-500`}
                  />
                  
                  {/* Image Container */}
                  <motion.div 
                    className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-background/50 backdrop-blur-sm"
                    whileHover={{ scale: 1.02, rotateY: 2 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Vertical List View */}
      <div className="md:hidden flex flex-col gap-16 py-12 px-4 container mx-auto">
        {contents.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-primary rounded-full" />
                <span className="text-primary font-semibold uppercase tracking-wider text-xs">
                  Feature {index + 1}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-foreground leading-tight">{item.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-border aspect-video">
               <div className={`absolute -inset-4 ${item.color} opacity-20 blur-2xl`} />
               <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="relative w-full h-full object-cover z-10"
              />
            </div>

            <ul className="space-y-3">
              {item.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  <span className="font-medium text-foreground/80 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
             <Button className="w-full group" variant="outline">
                Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Gradient overlay for smooth transition at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
