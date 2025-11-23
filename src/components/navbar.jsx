"use client"

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Globe, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      }
    }
  }

  const containerVariants = {
    full: {
      width: "100%",
      maxWidth: "100%",
      borderRadius: "0px",
      y: 0,
      x: 0,
      backgroundColor: "rgba(255, 255, 255, 0)",
      backdropFilter: "blur(0px)",
      border: "1px solid transparent",
      paddingTop: "20px",
      paddingBottom: "20px",
      boxShadow: "none",
    },
    floating: {
      width: "90%",
      maxWidth: "1200px",
      borderRadius: "9999px",
      y: 20,
      x: 0,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      paddingTop: "12px",
      paddingBottom: "12px",
      boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)"
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial="full"
        animate={isScrolled ? "floating" : "full"}
        variants={containerVariants}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="pointer-events-auto"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-10">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 group">
                <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-[#02042B] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white transform -rotate-12">
                    <path d="M4 4h16v16H4z" fill="currentColor" fillOpacity="0" />
                    <path d="M17.5 19c0-5.3-3.2-9.8-7.8-11.8L6 5.5v13h11.5z" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-xl font-extrabold tracking-tight text-[#02042B]">
                  Razorpay
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                <DropdownMenu 
                    key="Products"
                    open={activeDropdown === "Products"}
                    onOpenChange={(isOpen) => setActiveDropdown(isOpen ? "Products" : null)}
                  >
                    <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full text-gray-600 hover:text-[#02042B] hover:bg-white/50 transition-all outline-none">
                      Products <ChevronDown className={`w-3.5 h-3.5 opacity-50 transition-transform duration-200 ${activeDropdown === "Products" ? "rotate-180" : ""}`} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[240px] p-2 rounded-xl shadow-xl border-gray-100 bg-white/95 backdrop-blur-md">
                      {["Payment Gateway", "Payment Links", "Payment Pages", "Subscriptions", "Smart Collect", "Route", "Invoices", "Freelancer Payments"].map((item) => (
                        <DropdownMenuItem key={item} className="rounded-lg cursor-pointer py-2.5 px-3 focus:bg-blue-50 focus:text-blue-700 font-medium text-gray-600">
                          {item}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu 
                    key="Resources"
                    open={activeDropdown === "Resources"}
                    onOpenChange={(isOpen) => setActiveDropdown(isOpen ? "Resources" : null)}
                  >
                    <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full text-gray-600 hover:text-[#02042B] hover:bg-white/50 transition-all outline-none">
                      Resources <ChevronDown className={`w-3.5 h-3.5 opacity-50 transition-transform duration-200 ${activeDropdown === "Resources" ? "rotate-180" : ""}`} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[220px] p-2 rounded-xl shadow-xl border-gray-100 bg-white/95 backdrop-blur-md">
                      {["Blog", "Customer Stories", "Events", "Chargeback Guide", "Settlement Guide"].map((item) => (
                        <DropdownMenuItem key={item} className="rounded-lg cursor-pointer py-2.5 px-3 focus:bg-blue-50 focus:text-blue-700 font-medium text-gray-600">
                          {item}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                <Link
                  href="#"
                  className="text-sm font-medium px-4 py-2 rounded-full text-gray-600 hover:text-[#02042B] hover:bg-white/50 transition-all"
                >
                  Pricing
                </Link>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <DropdownMenu
                open={activeDropdown === "Language"}
                onOpenChange={(isOpen) => setActiveDropdown(isOpen ? "Language" : null)}
              >
                <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-full text-gray-600 hover:bg-white/50 transition-colors outline-none">
                  <Globe className="w-4 h-4" />
                  <span className="hidden lg:inline">EN</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="rounded-xl shadow-lg border-gray-100">
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>Hindi</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="h-6 w-px bg-gray-200 mx-1"></div>

              <Link
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-[#02042B] px-3 py-2 transition-colors"
              >
                Log In
              </Link>
              <Button className="bg-[#02042B] hover:bg-blue-700 text-white font-bold rounded-full px-6 shadow-lg shadow-blue-900/20 transition-all hover:shadow-blue-900/40 hover:-translate-y-0.5">
                Sign Up <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-4 bg-white/98 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Products</div>
                  {["Payment Gateway", "Payment Links", "Subscriptions", "Smart Collect"].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl font-medium transition-all text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                  
                  <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider mt-2">Resources</div>
                  {["Blog", "Customer Stories", "Events"].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl font-medium transition-all text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}

                  <Link
                    href="#"
                    className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-xl font-medium transition-all mt-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Pricing
                  </Link>
                </div>
                <div className="h-px bg-gray-100 my-2"></div>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-blue-600 px-4 py-3 rounded-xl font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Log In
                </Link>
                <Button className="w-full bg-[#02042B] text-white rounded-xl py-6 shadow-lg">Sign Up Now</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}
