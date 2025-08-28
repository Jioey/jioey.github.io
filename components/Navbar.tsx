"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  const nav_text: string = "block lg:inline-block lg:mt-0 hover:text-teal-200 ml-10 mr-4";
  const links = [
    { s: "Home", h: "/" },
    { s: "Resume", h: "/resumes/Joey_Zhu_Resume_Bilingual.pdf", t: "_blank" },
    // { s: "Dev Blog", h: "/dev_blog" },
    // { s: "Travel", h: "/travel" },
    { s: "Contact", h: "/#contact" }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-4 px-6 border-b border-gray-200 dark:border-gray-800">
      <div className="mx-12 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
            <span className="font-bold text-white text-lg">J</span>
          </div>
          <span className="font-bold text-xl">Joey Zhu</span>
        </motion.div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-8">
            {links.map((item, i) => (
              <motion.a
                key={item.s}
                href={item.h}
                target={item.t || ''}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item.s}
              </motion.a>
            ))}
          </div>
          
          {/* EN/中 button */}
          

          {/* Mobile navbar button */}
          {/* <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-2xl"
              aria-label="Menu"
            >
              ☰
            </motion.button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}