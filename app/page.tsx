"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import CodeSnippet from "@/components/CodeSnippet"
import Experience from "@/components/Experience"

export default function Portfolio() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Hi, I'm Diksha!"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="fixed inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.3) 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Enhanced Animated Code Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[
          { text: "function Portfolio() {", x: "10%", y: "20%", delay: "0s" },
          { text: "const [state, setState] = useState();", x: "80%", y: "30%", delay: "1s" },
          { text: "return <div>{content}</div>;", x: "20%", y: "70%", delay: "2s" },
          { text: "export default Component;", x: "90%", y: "60%", delay: "3s" },
          { text: "import React from 'react';", x: "5%", y: "50%", delay: "4s" },
          { text: "useEffect(() => {}, []);", x: "85%", y: "10%", delay: "5s" },
          { text: "const styles = { color: 'blue' };", x: "50%", y: "80%", delay: "6s" },
          { text: "npm install react-syntax-highlighter", x: "70%", y: "40%", delay: "7s" },
          { text: "console.log('Hello, World!');", x: "15%", y: "85%", delay: "8s" },
          { text: "git commit -m 'portfolio updates'", x: "75%", y: "15%", delay: "9s" },
        ].map((code, index) => (
          <div
            key={index}
            className="absolute text-blue-400/20 font-mono text-xs md:text-sm animate-pulse"
            style={{
              left: code.x,
              top: code.y,
              animationDelay: code.delay,
              animationDuration: "6s",
            }}
          >
            {code.text}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              className="bg-blue-600/10 border-blue-500/30 text-blue-400 hover:bg-blue-600/20 hover:border-blue-500 text-xs md:text-sm px-4 md:px-6 py-2 rounded-lg"
            >
              Available for work
            </Button>

            <nav className="hidden md:flex space-x-8">
              {["About", "Experience", "Skills", "Projects", "Contact"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                ☰
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative px-4 md:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
              {/* Text Content */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="relative mb-6 md:mb-8 text-center lg:text-left">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                    <span className="text-white">
                      {displayText}
                    </span>
                    <span className="animate-pulse text-blue-400">|</span>
                  </h1>
                  <div className="absolute -bottom-4 left-1/2 lg:left-0 transform -translate-x-1/2 lg:transform-none w-24 md:w-32 h-px bg-blue-500"></div>
                </div>

                  <p className="text-lg md:text-xl text-gray-300 font-medium mb-3 md:mb-4 leading-relaxed text-center lg:text-left">
                    Frontend Developer passionate about creating{" "}
                    <span className="text-blue-400 font-semibold">beautiful</span> and{" "}
                    <span className="text-gray-300 font-semibold">responsive</span> web experiences
                  </p>

                  <p className="text-base md:text-lg text-gray-400 font-medium mb-8 md:mb-12 leading-relaxed text-center lg:text-left">
                    Computer Engineering Student at Vasantdada Patil College | Mumbai, India
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-12 py-3 md:py-4 rounded-lg font-medium text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/25"
                      onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      View My Work
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-blue-500/30 text-blue-400 hover:border-blue-500 hover:bg-blue-500/10 px-8 md:px-12 py-3 md:py-4 rounded-lg bg-transparent font-medium text-base md:text-lg transition-all duration-300"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Contact Me
                    </Button>
                  </div>
                </div>

                {/* Profile Image */}
                <div className="lg:col-span-1 order-1 lg:order-2 relative">
                  <div className="relative group max-w-xs mx-auto">
                    {/* Main image container */}
                    <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 p-2 border border-gray-700">
                      <div className="relative overflow-hidden rounded-xl">
                        <Image
                          src="/profile.jpg"
                          alt="Diksha Deware - Frontend Developer"
                          width={280}
                          height={280}
                          className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500 ease-out"
                        />

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-blue-400 text-xs md:text-sm">Scroll for more</span>
              <div className="w-px h-8 md:h-12 bg-blue-500"></div>
            </div>
          </div>
        </section>

        {/* Transition Section */}
        <section className="py-16 md:py-32 relative">
          <div className="max-w-6xl mx-auto text-center px-4 md:px-8">
            <div className="relative">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl md:rounded-3xl p-8 md:p-16">
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-400 mb-4 md:mb-6">
                    From Concept to Code
                  </h3>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
                    <span className="text-white">
                      Turning Ideas Into
                    </span>
                    <br />
                    <span className="text-blue-500">
                      Digital Reality
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    I transform creative visions into beautiful, functional web experiences that users love to interact with.
                  </p>

                  <div className="mt-6 md:mt-8 flex justify-center">
                    <div className="w-24 md:w-32 h-px bg-blue-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-32 px-4 md:px-8">
          <Experience />
        </section>

        {/* About Me Section */}
        <section id="about" className="py-16 md:py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
                About Me
              </h2>
              <div className="w-12 md:w-16 h-px bg-blue-500 mx-auto"></div>
            </div>

            {/* Personal Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
              {[
                { title: "Education", value: "B.Tech Computer Engineering", subtitle: "CGPA: 8.61" },
                { title: "Location", value: "Mumbai, India", subtitle: "Available for remote work" },
                { title: "Graduation", value: "2027 (Expected)", subtitle: "Currently in 3rd year" },
                { title: "Certification", value: "Web Development", subtitle: "Udemy Bootcamp" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:bg-gray-800/50 hover:border-blue-500/30 transition-all duration-300"
                >
                  <h3 className="text-blue-400 font-semibold text-xs md:text-sm mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-white font-medium text-base md:text-lg mb-1">{item.value}</p>
                  <p className="text-gray-400 text-xs md:text-sm">{item.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Story Section */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-12 mb-12 md:mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-blue-400">
                    My Journey
                  </h3>
                  <div className="space-y-3 md:space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
                    <p>
                      I'm a passionate <span className="text-blue-400 font-semibold">Frontend Developer</span> currently pursuing my
                      B.Tech in Computer Engineering at Vasantdada Patil College in Mumbai. With a strong CGPA of 8.61,
                      I'm dedicated to both academic excellence and practical application.
                    </p>
                    <p>
                      My journey in web development started with curiosity and has evolved into a deep passion for
                      creating <span className="text-gray-300 font-semibold">beautiful, responsive interfaces</span> that provide
                      exceptional user experiences.
                    </p>
                    <p>
                      When I'm not coding, you'll find me exploring new design trends, contributing to open source
                      projects, or enjoying anime with a cup of chai. I believe in the power of clean code and
                      thoughtful design to make the web a more beautiful place!
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gray-800/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-700">
                    <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400">Current Focus</h4>
                    <ul className="space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base">
                      <li className="flex items-center gap-3">
                        <span className="text-blue-500">•</span>
                        Building responsive web applications with React & Next.js
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-gray-400">•</span>
                        Exploring modern CSS frameworks and animations
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-blue-500">•</span>
                        Contributing to open source projects
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-gray-400">•</span>
                        Learning backend technologies to become full-stack
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">
                Technical Skills
              </h2>
              <div className="w-16 md:w-24 h-px bg-blue-500 mx-auto mb-4 md:mb-6"></div>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                The tools and technologies I use to bring ideas to life
              </p>
            </div>

            {/* Main Skills Categories with Code Snippets */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
              {[
                {
                  category: "Frontend Development",
                  skills: [
                    { name: "React.js" },
                    { name: "Next.js" },
                    { name: "Tailwind CSS" },
                    { name: "JavaScript" },
                    { name: "TypeScript" },
                    { name: "HTML/CSS" },
                  ],
                  codeSnippet: {
                    language: "jsx",
                    code: `function Portfolio() {
  const [active, setActive] = useState(0);

  return (
    <div className="portfolio-container">
      <HeroSection />
      <SkillsSection active={active} />
    </div>
  );
}`,
                    title: "React Component Example"
                  }
                },
                {
                  category: "Backend & Database",
                  skills: [
                    { name: "Node.js" },
                    { name: "Express.js" },
                    { name: "MongoDB" },
                    { name: "Firebase" },
                    { name: "MySQL" },
                    { name: "Redux" },
                  ],
                  codeSnippet: {
                    language: "javascript",
                    code: `const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/portfolio')
  .then(() => console.log('DB Connected'))
  .catch(err => console.error(err));

// API Routes
app.get('/api/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});`,
                    title: "Express.js API Example"
                  }
                },
              ].map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:bg-gray-800/50 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                    <h3 className="text-xl md:text-2xl font-semibold text-blue-400">
                      {category.category}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-gray-800/50 rounded-xl p-3 md:p-4 hover:bg-gray-700/50 transition-colors duration-300 text-center"
                      >
                        <div className="text-white font-medium text-xs md:text-sm">{skill.name}</div>
                      </div>
                    ))}
                  </div>

                  <CodeSnippet
                    language={category.codeSnippet.language}
                    code={category.codeSnippet.code}
                    title={category.codeSnippet.title}
                    className="text-xs md:text-sm"
                  />
                </div>
              ))}
            </div>

            {/* Languages & Tools Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8">
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-blue-400">Programming Languages</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    { name: "JavaScript" },
                    { name: "TypeScript" },
                    { name: "Java" },
                    { name: "C" },
                  ].map((lang, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 rounded-xl p-3 md:p-4 hover:bg-gray-700/50 transition-colors duration-300 text-center"
                    >
                      <div className="text-white font-medium text-xs md:text-sm">{lang.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8">
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-blue-400">Development Tools</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                  {[
                    { name: "VS Code" },
                    { name: "Git/GitHub" },
                    { name: "Vercel" },
                    { name: "Postman" },
                    { name: "Figma" },
                    { name: "Framer Motion" },
                  ].map((tool, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 rounded-xl p-3 md:p-4 hover:bg-gray-700/50 transition-colors duration-300 text-center"
                    >
                      <div className="text-white font-medium text-xs md:text-sm">{tool.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
                My Projects
              </h2>
              <div className="w-12 md:w-16 h-px bg-blue-500 mx-auto"></div>
            </div>

            <div className="space-y-16 md:space-y-24">
              {[
                {
                  number: "01",
                  title: "Rizzume Builder",
                  description:
                    "A fully responsive, modern resume builder web app using React, Tailwind CSS, and Firebase. Users can generate professional resumes in real-time with customizable templates and instant preview.",
                  tech: ["React.js", "Next.js", "Tailwind CSS", "Firebase"],
                  year: "2025",
                  status: "Live",
                  preview: "rizzume",
                  links: {
                    live: "https://rizzume-diksha.vercel.app/",
                    github: "https://github.com/dikshaa2909/rizzume",
                  },
                },
                {
                  number: "02",
                  title: "ThemeMeBabe",
                  description:
                    "A mood-based VS Code extension that dynamically changes your editor theme based on your emotional state. Released with 6 downloads and unique vibrant themes tailored to different moods.",
                  tech: ["TypeScript", "Next.js", "Tailwind CSS", "VS Code API"],
                  year: "2025",
                  status: "Extension",
                  preview: "thememebabe",
                  links: {
                    live: "https://thememebabe-diksha.vercel.app",
                    github: "https://github.com/dikshaa2909/ThemeMeBabe",
                  },
                },
                {
                  number: "03",
                  title: "Portfolio Website",
                  description:
                    "A creative and responsive portfolio website showcasing my projects and skills with beautiful animations and modern design principles.",
                  tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
                  year: "2025",
                  status: "Current",
                  links: { live: "https://diksha-protfolio.vercel.app/", github: "https://github.com/dikshaa2909/portfolio-website" },
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center hover:bg-gray-900/30 transition-all duration-500 p-4 md:p-8 rounded-2xl md:rounded-3xl relative border border-transparent hover:border-blue-500/20"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-full"></div>

                  <div className="lg:col-span-2 text-center lg:text-left">
                    <span className="text-3xl md:text-4xl font-bold text-gray-600 group-hover:text-blue-400 transition-colors duration-500">
                      {project.number}
                    </span>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold group-hover:text-blue-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="px-2 md:px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 md:px-4 py-1 md:py-2 border border-gray-600 rounded-full text-xs md:text-sm text-gray-300 font-medium hover:border-blue-500/30 hover:text-blue-300 hover:bg-blue-500/5 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 md:px-6"
                        onClick={() => window.open(project.links.live, "_blank")}
                      >
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-blue-500/30 text-blue-400 hover:border-blue-500 rounded-lg px-4 md:px-6 bg-transparent"
                        onClick={() => window.open(project.links.github, "_blank")}
                      >
                        Code
                      </Button>
                    </div>
                  </div>

                  <div className="lg:col-span-3">
                    <div className="h-32 md:h-40 rounded-xl md:rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500 relative border border-gray-700 group-hover:border-blue-500/20">
                      {project.preview === "rizzume" ? (
                        <Image
                          src="/rizzume-preview.png"
                          alt="Rizzume Builder Preview"
                          width={400}
                          height={160}
                          className="w-full h-full object-cover object-center"
                        />
                      ) : project.preview === "thememebabe" ? (
                        <Image
                          src="/thememebabe-preview.jpg"
                          alt="ThemeMeBabe VS Code Extension Preview"
                          width={400}
                          height={160}
                          className="w-full h-full object-cover object-center"
                        />
                      ) : (
                        <div className="h-full bg-gray-800 flex items-center justify-center relative overflow-hidden">
                          <span className="text-gray-500 font-medium relative z-10 text-sm md:text-base">
                            Preview
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-1 text-center lg:text-right">
                    <span className="text-gray-500 font-medium text-sm md:text-base">{project.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-32 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-white">
              Let's Work Together
            </h2>
            <div className="w-12 md:w-16 h-px bg-blue-500 mx-auto mb-8 md:mb-12"></div>

            <p className="text-lg md:text-xl text-gray-300 mb-12 md:mb-16 leading-relaxed">
              Always excited to discuss new projects, creative ideas, or opportunities to bring your vision to life!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center mb-12 md:mb-16">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-3 md:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group shadow-lg shadow-blue-600/25"
              >
                <span className="relative z-10">Start a Project</span>
                <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500/30 text-blue-400 hover:border-blue-500 hover:bg-blue-500/10 px-4 sm:px-6 md:px-8 lg:px-12 py-3 md:py-4 rounded-lg bg-transparent font-medium text-sm sm:text-base md:text-lg transition-all duration-300"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Diksha_Resume.pdf";
                  link.download = "Diksha_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                View Resume
              </Button>
            </div>

            <div className="pt-12 md:pt-16 border-t border-gray-700">
              <div className="flex justify-center space-x-6 md:space-x-8 flex-wrap gap-4 md:gap-6">
                {[
                  { name: "Email", link: "mailto:dikshadeware@gmail.com" },
                  { name: "LinkedIn", link: "https://www.linkedin.com/in/diksha-deware-77a9772b5/" },
                  { name: "GitHub", link: "https://github.com/dikshaa2909" },
                  { name: "X", link: "https://x.com/diiksshaaaa" },
                ].map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium relative group flex items-center gap-2 text-sm md:text-base"
                  >
                    {platform.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-700">
        <p className="text-gray-400 font-medium text-sm">Made by Diksha</p>
      </footer>
    </div>
  )
}
