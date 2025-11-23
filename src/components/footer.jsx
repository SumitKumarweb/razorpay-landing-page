"use client"

import { Link } from "react-router-dom"
import { Twitter, Facebook, Instagram, Linkedin, Send, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  const footerLinks = {
    Products: ["Payment Gateway", "Payment Pages", "Payment Links", "QR Codes", "Subscriptions", "Smart Collect"],
    Developers: ["Docs", "Integrations", "API Reference", "SDKs"],
    Resources: ["Blog", "Customer Stories", "Events", "Chargeback Guide", "Settlement Guide"],
    Company: ["About Us", "Careers", "Terms of Use", "Privacy Policy"],
  }

  return (
    <footer className="pt-8 pb-8 border-t border-gray-200 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-900/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-20">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-blue-600 flex items-center justify-center transition-transform group-hover:scale-105">
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-1/2"></div>
                <span className="text-blue-600 font-bold text-2xl relative z-10">R</span>
              </div>
              <span className="text-2xl font-bold text-gray-900 tracking-tight">Razorpay</span>
            </Link>
            <p className="text-gray-600 text-base mb-8 max-w-sm leading-relaxed">
              Razorpay is the only payments solution in India that allows businesses to accept, process and disburse
              payments with its product suite.
            </p>
            
            {/* Newsletter */}
            <div className="mb-8">
              <h4 className="text-gray-900 font-semibold mb-4">Subscribe to our newsletter</h4>
              <div className="flex gap-2 max-w-sm">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 rounded-lg h-11"
                />
                <Button size="icon" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-11 w-11 shrink-0">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-gray-900 mb-6 text-lg">{category}</h4>
              <ul className="space-y-4 text-sm text-gray-600">
                {links.map((link) => (
                  <li key={link}>
                    <Link 
                      to="#" 
                      className="hover:text-blue-400 transition-colors flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-blue-400 transition-all duration-300"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 Razorpay Software Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-2 group">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
