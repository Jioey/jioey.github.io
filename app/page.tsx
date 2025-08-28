'use client'
// import { getAllPosts, PostMeta } from '@/lib/posts';
import ImageGallery from '@/components/ImageGallery';
import ContactIcons from '@/components/ContactIcons';
import { motion } from "framer-motion";

import Image from 'next/image';
import Link from 'next/link';

// Uses Tailwind CSS

export default function HomePage() {
  // We can only run this on the server side in Next.js 13 with the 'app' folder
  // because reading fs is not allowed on the client side.
  // Therefore, we'll use a special "async" server component approach:
  // const posts: PostMeta[] = getAllPosts();

  // List of images for the image gallery
  const images = [
    { src: "/landing/springs_hall.JPG", alt: "Springs Town Hall", caption: <>My high school, Indian Springs School in Birmingham, Alabama. Fun fact: <a href="https://en.wikipedia.org/wiki/John_Green" style={{ textDecoration: "underline" }}>John Green</a> went there too!</> },
    // TODO: add Seamester 
    { src: "/landing/bu_nick.jpg", pref: "/landing/bu_nick.HEIC", alt: "Boston University, Nickerson Field", caption: <>Started at Boston University in Spring 2023 as a student in the College of General Studies (CGS), and later transferred into computer science.</> },
    { src: "/landing/london_bu.jpg", pref: "/landing/london_bu.HEIC", alt: "Boston University London", caption: <>       {"Studied abroad in Boston University London as part of the CGS program. This is one of the classroom buildings, and we had some classes in UCL's building too!"}</> },
    // TODO: maybe graduation?
  ]

  // Skill categories
  const skillCategories = [
    {
      title: "Embedded Systems",
      icon: "🔌",
      skills: [
        "C", "MicroChip dsPIC", "Linux", "UART"
      ]
    },
    {
      title: "FPGA",
      icon: "⚡",
      skills: [
        "SystemVerilog", "Vivado", "RTL Synthesis"
      ]
    },
    {
      title: "Full-Stack",
      icon: "🌐",
      skills: [
        "Next.js", "React", "TypeScript", "Tailwind CSS",
        "Node.js", "Flask", "MySQL", "AWS"
      ]
    }
  ];

  const projects = [
    {
      title: 'RISC-V CPU Design',
      type: 'FPGA',
      image: '/landing/kira.jpg',
      description: 'A 5-stage pipeliend partial RV32 design for my Computer Architecture class, deployed on a Xlinx Kria board.',
      tech: ['Vivado', 'SystemVerilog', 'Xlinx FPGA']
    },
    {
      title: 'Amazing Ball System',
      type: 'Embedded Systems',
      image: '/landing/embedded.jpg',
      description: 'Ball-balacing platform using dsPIC microcontroller (by MicroChip), PID algorithm, and PWM servos.',
      tech: ['dsPIC33', 'C', 'PID Controller', 'PWM']
    },
    {
      title: 'BUCSSA Portal',
      type: 'Full Stack',
      image: '/landing/bucssa.png',
      description: 'A user portal for Boston Univerisity\'s CSSA club (Chinese Students & Scholars Association).',
      tech: ['HTML/CSS/JS', 'Flask', 'MySQL', 'AWS']
    }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200'>
      {/* Landing section */}
      <section className="flex h-screen">
        <div className="flex-1 p-2 flex flex-col justify-center m-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2"
          >
            <p className='text-4xl'>Hi there, welcome to my page!</p>
            <br />
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-lg">
              {"My name is Joey Zhu and I graduated from Boston University in 2025 with a Bachelor\'s in Computer     Science. I\'m particularly interested in developing efficient software across bridging software and hardware. My project experiences ranges from embedded systems, FPGAs, and a bit of web development. \
              My Business Administration minor also inspires me to use my tech background in the field of consulting, where my experiences in information systems and business presentations."}              
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow-lg hover:shadow-indigo-500/30 transition-all"
              >
                View Projects
              </motion.button>
              <Link href="/resumes/Joey_Zhu_Resume_Bilingual.pdf" target='_blank'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-lg font-medium border border-gray-300 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
                >
                  View Resume
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me & Photo */}
      <section className="max-w-7xl mx-auto px-8 py-32 md:py-28 flex flex-col md:flex-row gap-12 items-stretch">
        <div className="flex-1 flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              {"I'm Joey, a recent grad from Boston University with a Bachelors in Computer Science. Originally from Shanghai and attended high-school through undergrad in the US."}
            </p>

            <p>
              My academic journey has fueled my passion for <span className="font-medium text-indigo-600 dark:text-indigo-400">web development and hardware/software integration</span>, particularly in web full-stack, embedded systems, and FPGA development. My business minor has also sparked interest in technology consulting roles where I can bridge technical and business domains.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-lg font-medium border border-gray-300 dark:border-gray-700 shadow-sm hover:shadow-md transition-all w-1/3"
          >
            <Link href="/resume">
              Download Resume
            </Link>
          </motion.button>
        </div>

        {/* Pic */}
        <div className="flex-1 relative w-full min-h-[400px] md:min-h-[500px]">
          <Image
            src="/me_sq.jpg"
            alt="Joey at Boston University"
            fill
            priority
            className="rounded-xl object-cover shadow-2xl"
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectPosition: 'center top' // ensure head is always seeable
            }}
          />
        </div>
      </section>

      {/* Skills */}
      <section className="mx-28 mt-28 mb-16">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
          >
            I posess skills and project experiences from interdiciplinary fields:
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative group"
            >
              {/* Cards */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg h-full transition-all duration-300 group-hover:shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                {/* <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {category.description}
                </p> */}

                {/* Hover to show detailed skills */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    transition: { duration: 0.3 }
                  }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
                      Relavent Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 mx-28">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
          >
            Here are some of my recent projects that showcase my skills and experiences.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={"rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"}
              style={{ boxShadow: "13px -11px teal" }}
            >
              {/* 3D 反转效果
              <motion.div
                whileHover={{ rotateY: 180 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div style={{ backfaceVisibility: 'hidden' }}>
                  // 正面内容
                </div>
                <div style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
                  // 背面内容
                </div>
              </motion.div> */}
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 relative ">
                {/* <div className="absolute inset-0 bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" /> */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 rounded-full">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {/* View Project Button */}
                {/* <div className="flex justify-between">
                  <button className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                    View Project
                  </button>
                  <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* <div className="text-center my-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-lg font-medium border border-gray-300 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
          >
            View All Projects
          </motion.button>
        </div> */}
      </section>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-24">
        <div className="mb-4 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-indigo-600 dark:text-indigo-400">Academic Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Through the lens at my high school and beyond
          </p>
        </div>

        <div className="h-[500px] md:h-[600px] px-4">
          <ImageGallery
            images={images}
          />
        </div>
      </section>

      <section id='contact' className="flex flex-col items-center justify-center py-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-indigo-600 dark:text-indigo-400">Contact</span> Me </h2>
        <p className="text-lg mb-2">Whether for job opportunities, collaborations, or just to say hello!</p>
        <p className="mb-4">yifanzhu233 at gmail.com</p>
        <ContactIcons />
      </section>
    </div>
  );
}