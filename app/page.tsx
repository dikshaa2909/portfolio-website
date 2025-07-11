"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [displayText, setDisplayText] = useState("")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const fullText = "Hi, I'm Diksha! ✨"

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      let index = 0
      const typeWriter = setInterval(() => {
        if (index < fullText.length) {
          setDisplayText(fullText.slice(0, index + 1))
          index++
        } else {
          clearInterval(typeWriter)
        }
      }, 80)
      return () => clearInterval(typeWriter)
    }
  }, [isLoading])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Cute Background Elements */}
      <div
        className="fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,192,203,0.4) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating Hearts and Stars */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300/20 text-xl md:text-2xl animate-bounce"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.3}s`,
            }}
          >
            {i % 3 === 0 ? "✨" : i % 3 === 1 ? "💫" : "🌸"}
          </div>
        ))}
      </div>

      {/* Floating Shapes with Cute Colors */}
      <div
        className="fixed w-60 h-60 md:w-80 md:h-80 border border-pink-400/10 rounded-full pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          left: mousePosition.x * 0.02 - 120,
          top: mousePosition.y * 0.02 - 120,
        }}
      />

      <div
        className="fixed w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-pink-400/5 to-purple-400/5 rounded-full pointer-events-none transition-transform duration-700 ease-out blur-xl"
        style={{
          right: mousePosition.x * 0.01 - 64,
          bottom: mousePosition.y * 0.01 - 64,
        }}
      />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
          <div className="flex items-center justify-between">
          <Button
  variant="outline"
  className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white text-xs md:text-sm px-4 md:px-6 py-2 rounded-full backdrop-blur-sm"
>
  ✨ Available for work
</Button>


            <nav className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-light text-gray-300 hover:text-pink-300 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" className="text-pink-300 hover:text-pink-400">
                ☰
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative px-4 md:px-8">
          {isLoading ? (
            <div className="text-center">
              <div className="relative">
                <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-pink-400/20 rounded-full mx-auto mb-6 md:mb-8"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 border-2 border-transparent border-t-pink-400 rounded-full animate-spin"></div>
              </div>
              <p className="text-sm text-pink-300/70 font-light">Loading magic... ✨</p>
            </div>
          ) : (
            <div className="text-center max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
                {/* Text Content */}
                <div className="lg:col-span-2 order-2 lg:order-1">
                  <div className="relative mb-6 md:mb-8 text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light tracking-tight leading-tight">
                      <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                        {displayText}
                      </span>
                      <span className="animate-pulse text-pink-400 font-thin">|</span>
                    </h1>
                    <div className="absolute -bottom-4 left-1/2 lg:left-0 transform -translate-x-1/2 lg:transform-none w-24 md:w-32 h-px bg-gradient-to-r from-pink-400 via-purple-400 to-transparent"></div>
                  </div>

                  <p className="text-lg md:text-xl text-gray-300 font-light mb-3 md:mb-4 leading-relaxed text-center lg:text-left">
                    Frontend Developer passionate about creating{" "}
                    <span className="text-pink-300 font-normal">beautiful</span> and{" "}
                    <span className="text-purple-300 font-normal">responsive</span> web experiences
                  </p>

                  <p className="text-base md:text-lg text-gray-400 font-light mb-8 md:mb-12 leading-relaxed text-center lg:text-left">
                    🎓 Computer Engineering Student at Vasantdada Patil College | 📍 Mumbai, India
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-light text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-pink-500/25"
                      onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      🎨 View My Work
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-pink-400/30 text-pink-300 hover:border-pink-400 hover:bg-pink-400/10 px-8 md:px-12 py-3 md:py-4 rounded-full bg-transparent font-light text-base md:text-lg transition-all duration-300"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      💌 Say Hello
                    </Button>
                  </div>
                </div>

                {/* Profile Image */}
                <div className="lg:col-span-1 order-1 lg:order-2 relative">
                  <div className="relative group max-w-xs mx-auto">
                    {/* Cute floating elements around image */}
                    <div
                      className="absolute -top-4 md:-top-6 -left-4 md:-left-6 text-xl md:text-2xl animate-bounce"
                      style={{ animationDelay: "0s" }}
                    >
                      🌟
                    </div>
                    <div
                      className="absolute -top-3 md:-top-4 -right-3 md:-right-4 text-lg md:text-xl animate-bounce"
                      style={{ animationDelay: "0.5s" }}
                    >
                      💖
                    </div>
                    <div
                      className="absolute -bottom-3 md:-bottom-4 -left-3 md:-left-4 text-base md:text-lg animate-bounce"
                      style={{ animationDelay: "1s" }}
                    >
                      🦄
                    </div>
                    <div
                      className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 text-lg md:text-xl animate-bounce"
                      style={{ animationDelay: "1.5s" }}
                    >
                      ✨
                    </div>

                    {/* Main image container */}
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-2 backdrop-blur-sm border border-pink-400/20">
                      <div className="relative overflow-hidden rounded-2xl">
                        <Image
                          src="/profile.jpg"
                          alt="Diksha Deware - Frontend Developer"
                          width={280}
                          height={280}
                          className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        />

                        {/* Cute overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>

                    {/* Floating cute text */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500/90 to-purple-500/90 backdrop-blur-sm px-3 md:px-4 py-1 md:py-2 rounded-full border border-pink-400/30">
                      <span className="text-xs md:text-sm text-white font-light">Nice to meet you! 🐱</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Cute Scroll Indicator */}
          <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-pink-300 text-xs md:text-sm">Scroll for more ✨</span>
              <div className="w-px h-8 md:h-12 bg-gradient-to-b from-pink-400 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Creative Transition Section */}
        <section className="py-16 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-400/10 to-transparent"></div>

          {/* Floating decorative elements */}
          <div className="absolute top-10 md:top-20 left-5 md:left-10 text-pink-300/30 text-4xl md:text-6xl animate-pulse">
            ✨
          </div>
          <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 text-purple-300/30 text-3xl md:text-4xl animate-bounce">
            💫
          </div>
          <div
            className="absolute top-1/2 left-1/4 text-pink-300/20 text-2xl md:text-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            🌟
          </div>

          <div className="max-w-6xl mx-auto text-center px-4 md:px-8">
            <div className="relative">
              {/* Main content */}
              <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm border border-pink-400/20 rounded-2xl md:rounded-3xl p-8 md:p-16 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl md:rounded-3xl"></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-pink-300 mb-4 md:mb-6 animate-fade-in">
                    From Concept to Code
                  </h3>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light mb-6 md:mb-8 leading-tight">
                    <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                      Turning Ideas Into
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                      Digital Reality
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    I transform creative visions into beautiful, functional web experiences that users love to interact
                    with ✨
                  </p>

                  {/* Decorative line */}
                  <div className="mt-6 md:mt-8 flex justify-center">
                    <div className="w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-16 md:py-32 px-4 md:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent"></div>

          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                🌸 About Me
              </h2>
              <div className="w-12 md:w-16 h-px bg-gradient-to-r from-pink-400 to-purple-400 mx-auto"></div>
            </div>

            {/* Personal Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
              {[
                { icon: "🎓", title: "Education", value: "B.Tech Computer Engineering", subtitle: "CGPA: 8.61" },
                { icon: "📍", title: "Location", value: "Mumbai, India", subtitle: "Available for remote work" },
                { icon: "📅", title: "Graduation", value: "2027 (Expected)", subtitle: "Currently in 3rd year" },
                { icon: "🏆", title: "Certification", value: "Web Development", subtitle: "Udemy Bootcamp" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-400/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-purple-500/20 hover:border-pink-400/40 transition-all duration-300 group"
                >
                  <div className="text-3xl md:text-4xl mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-pink-300 font-light text-xs md:text-sm mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-white font-medium text-base md:text-lg mb-1">{item.value}</p>
                  <p className="text-gray-400 text-xs md:text-sm">{item.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Story Section */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-pink-400/20 rounded-2xl md:rounded-3xl p-6 md:p-12 mb-12 md:mb-16 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-light mb-4 md:mb-6 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                    My Journey ✨
                  </h3>
                  <div className="space-y-3 md:space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
                    <p>
                      I'm a passionate <span className="text-pink-300">Frontend Developer</span> currently pursuing my
                      B.Tech in Computer Engineering at Vasantdada Patil College in Mumbai. With a strong CGPA of 8.61,
                      I'm dedicated to both academic excellence and practical application.
                    </p>
                    <p>
                      My journey in web development started with curiosity and has evolved into a deep passion for
                      creating <span className="text-purple-300">beautiful, responsive interfaces</span> that provide
                      exceptional user experiences.
                    </p>
                    <p>
                      When I'm not coding, you'll find me exploring new design trends, contributing to open source
                      projects, or enjoying anime with a cup of chai ☕. I believe in the power of clean code and
                      thoughtful design to make the web a more beautiful place!
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl md:rounded-2xl p-4 md:p-6 border border-pink-400/20">
                    <h4 className="text-lg md:text-xl font-light mb-3 md:mb-4 text-pink-300">🎯 Current Focus</h4>
                    <ul className="space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base">
                      <li className="flex items-center gap-3">
                        <span className="text-pink-400">•</span>
                        Building responsive web applications with React & Next.js
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-purple-400">•</span>
                        Exploring modern CSS frameworks and animations
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-pink-400">•</span>
                        Contributing to open source projects
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-purple-400">•</span>
                        Learning backend technologies to become full-stack
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Simplified */}
        <section
          id="skills"
          className="py-16 md:py-32 px-4 md:px-8 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent relative overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute top-10 md:top-20 right-10 md:right-20 text-purple-300/20 text-3xl md:text-5xl animate-bounce">
            💻
          </div>
          <div className="absolute bottom-10 md:bottom-20 left-10 md:left-20 text-pink-300/20 text-3xl md:text-4xl animate-pulse">
            🚀
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-light mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  💻 Technical Arsenal
                </span>
              </h2>
              <div className="w-16 md:w-24 h-px bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 mx-auto mb-4 md:mb-6"></div>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                The tools and technologies I use to bring ideas to life
              </p>
            </div>

            {/* Main Skills Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
              {[
                {
                  category: "Frontend Magic",
                  emoji: "✨",
                  gradient: "from-pink-500/20 to-purple-500/20",
                  skills: [
                    { name: "React.js", icon: "⚛️" },
                    { name: "Next.js", icon: "▲" },
                    { name: "Tailwind CSS", icon: "🎨" },
                    { name: "JavaScript", icon: "🟨" },
                    { name: "TypeScript", icon: "🔷" },
                    { name: "HTML/CSS", icon: "🌐" },
                  ],
                },
                {
                  category: "Backend & Database",
                  emoji: "🗄️",
                  gradient: "from-purple-500/20 to-pink-500/20",
                  skills: [
                    { name: "Node.js", icon: "🟢" },
                    { name: "Express.js", icon: "🚀" },
                    { name: "MongoDB", icon: "🍃" },
                    { name: "Firebase", icon: "🔥" },
                    { name: "MySQL", icon: "🐬" },
                    { name: "Redux", icon: "🔄" },
                  ],
                },
              ].map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className={`bg-gradient-to-br ${category.gradient} border border-pink-400/20 bg-clip-padding backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:scale-105 transition-all duration-500`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                  <div className="absolute inset-[1px] bg-gray-900/90 rounded-2xl md:rounded-3xl -z-10"></div>

                  <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                    <span className="text-3xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
                      {category.emoji}
                    </span>
                    <h3 className="text-xl md:text-2xl font-light bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                      {category.category}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-gray-800/50 rounded-xl p-3 md:p-4 hover:bg-gray-700/50 transition-colors duration-300 group/skill text-center"
                      >
                        <div className="text-xl md:text-2xl mb-1 md:mb-2 group-hover/skill:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <div className="text-white font-light text-xs md:text-sm">{skill.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Languages & Tools Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 border border-pink-400/20 rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <span className="text-3xl md:text-4xl">🔤</span>
                  <h3 className="text-xl md:text-2xl font-light text-pink-300">Programming Languages</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    { name: "JavaScript", icon: "🟨" },
                    { name: "TypeScript", icon: "🔷" },
                    { name: "Java", icon: "☕" },
                    { name: "C", icon: "⚙️" },
                  ].map((lang, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 rounded-xl p-3 md:p-4 hover:bg-gray-700/50 transition-colors duration-300 group text-center"
                    >
                      <div className="text-xl md:text-2xl mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                        {lang.icon}
                      </div>
                      <div className="text-white font-light text-xs md:text-sm">{lang.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 border border-purple-400/20 rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <span className="text-3xl md:text-4xl">🛠️</span>
                  <h3 className="text-xl md:text-2xl font-light text-purple-300">Development Tools</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                  {[
                    { name: "VS Code", icon: "💻" },
                    { name: "Git/GitHub", icon: "🐱" },
                    { name: "Vercel", icon: "▲" },
                    { name: "Postman", icon: "📮" },
                    { name: "Figma", icon: "🎨" },
                    { name: "Framer Motion", icon: "🎭" },
                  ].map((tool, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 rounded-xl p-3 md:p-4 hover:bg-gray-700/50 transition-colors duration-300 group text-center"
                    >
                      <div className="text-xl md:text-2xl mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                        {tool.icon}
                      </div>
                      <div className="text-white font-light text-xs md:text-sm">{tool.name}</div>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                🎨 My Creative Projects
              </h2>
              <div className="w-12 md:w-16 h-px bg-gradient-to-r from-pink-400 to-purple-400 mx-auto"></div>
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
                  status: "✨ Live",
                  emoji: "📄",
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
                  status: "💖 Extension",
                  emoji: "🎨",
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
                  status: "🌟 Current",
                  emoji: "💼",
                  links: { live: "https://diksha-protfolio.vercel.app/", github: "https://github.com/dikshaa2909/portfolio-website" },
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center hover:bg-gradient-to-r hover:from-pink-500/5 hover:to-purple-500/5 transition-all duration-500 p-4 md:p-8 rounded-2xl md:rounded-3xl relative border border-transparent hover:border-pink-400/20"
                >
                  {/* Cute hover effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 to-purple-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-full"></div>

                  <div className="lg:col-span-2 text-center lg:text-left">
                    <div className="text-4xl md:text-5xl mb-2">{project.emoji}</div>
                    <span className="text-3xl md:text-4xl font-light text-gray-700 group-hover:text-pink-400 transition-colors duration-500">
                      {project.number}
                    </span>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-light group-hover:text-pink-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="px-2 md:px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 rounded-full text-xs font-light border border-pink-400/30">
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
                          className="px-3 md:px-4 py-1 md:py-2 border border-white/10 rounded-full text-xs md:text-sm text-gray-300 font-light hover:border-pink-400/30 hover:text-pink-300 hover:bg-pink-400/5 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full px-4 md:px-6"
                        onClick={() => window.open(project.links.live, "_blank")}
                      >
                        🚀 Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-pink-400/30 text-pink-300 hover:border-pink-400 rounded-full px-4 md:px-6 bg-transparent"
                        onClick={() => window.open(project.links.github, "_blank")}
                      >
                        💻 Code
                      </Button>
                    </div>
                  </div>

                  <div className="lg:col-span-3">
                    <div className="h-32 md:h-40 rounded-xl md:rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500 relative border border-white/5 group-hover:border-pink-400/20">
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
                        <div className="h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:from-pink-900/20 group-hover:to-purple-900/20 transition-all duration-500 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <span className="text-gray-500 font-light relative z-10 text-sm md:text-base">
                            ✨ Preview
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-1 text-center lg:text-right">
                    <span className="text-gray-500 font-light text-sm md:text-base">{project.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-32 px-4 md:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-pink-400/10 via-purple-400/5 to-transparent"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
              💌 Let's Create Magic Together
            </h2>
            <div className="w-12 md:w-16 h-px bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8 md:mb-12"></div>

            <p className="text-lg md:text-xl text-gray-300 mb-12 md:mb-16 leading-relaxed">
              Always excited to discuss new projects, creative ideas, or opportunities to bring your vision to life! ✨
            </p>

            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center mb-12 md:mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-4 sm:px-6 md:px-8 lg:px-12 py-3 md:py-4 rounded-full font-light text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group shadow-lg shadow-pink-500/25"
              >
                <span className="relative z-10">🚀 Start a Project</span>
                <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pink-400/30 text-pink-300 hover:border-pink-400 hover:bg-pink-400/10 px-4 sm:px-6 md:px-8 lg:px-12 py-3 md:py-4 rounded-full bg-transparent font-light text-sm sm:text-base md:text-lg transition-all duration-300"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Diksha_Resume.pdf";
                  link.download = "Diksha_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                
              
                
              >
                📄 View Resume
              </Button>
            </div>

            <div className="pt-12 md:pt-16 border-t border-pink-400/20">
              <div className="flex justify-center space-x-6 md:space-x-8 flex-wrap gap-4 md:gap-6">
                {[
                  { name: "Email", emoji: "📧", link: "mailto:dikshadeware@gmail.com" },
                  { name: "LinkedIn", emoji: "💼", link: "https://www.linkedin.com/in/diksha-deware-77a9772b5/" },
                  { name: "GitHub", emoji: "🐱", link: "https://github.com/dikshaa2909" },
                  { name: "X", emoji: "🐦", link: "https://x.com/diiksshaaaa" },
                ].map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-300 transition-colors duration-300 font-light relative group flex items-center gap-2 text-sm md:text-base"
                  >
                    <span className="text-base md:text-lg">{platform.emoji}</span>
                    {platform.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-pink-400/20">
        <p className="text-gray-400 font-light text-sm">Made with 💖 by Diksha</p>
      </footer>
    </div>
  )
}
