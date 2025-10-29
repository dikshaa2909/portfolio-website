"use client"

import { useState } from "react"

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  achievements: string[]
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  const experiences: ExperienceItem[] = [
    {
      title: "Frontend Developer Intern",
      company: "Tech Startup",
      period: "2024 - Present",
      description: "Developing modern web applications using React and Next.js, focusing on user experience and performance optimization.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      achievements: [
        "Built responsive web applications serving 1000+ users",
        "Improved page load times by 40% through optimization",
        "Collaborated with design team to implement pixel-perfect UI"
      ]
    },
    {
      title: "Web Development Student",
      company: "Self-Learning & Projects",
      period: "2023 - 2024",
      description: "Self-taught web development through personal projects and online courses, building a strong foundation in modern web technologies.",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
      achievements: [
        "Completed 15+ personal projects including full-stack applications",
        "Earned certification in Web Development from Udemy",
        "Contributed to open source projects on GitHub"
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
          Experience
        </h2>
        <div className="w-12 md:w-16 h-px bg-blue-500 mx-auto"></div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8 md:mb-12">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-1 flex gap-1">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium text-sm md:text-base transition-all duration-300 ${
                activeTab === index
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-blue-400 hover:bg-gray-800/50"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>
      </div>

      {/* Experience Content */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column - Basic Info */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-2">
                  {experiences[activeTab].title}
                </h3>
                <p className="text-gray-300 font-medium text-base md:text-lg">
                  {experiences[activeTab].company}
                </p>
                <p className="text-gray-400 text-sm md:text-base mt-1">
                  {experiences[activeTab].period}
                </p>
              </div>

              <div>
                <h4 className="text-blue-400 font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experiences[activeTab].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs md:text-sm font-medium border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h4 className="text-blue-400 font-semibold mb-3">Role Description</h4>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {experiences[activeTab].description}
              </p>
            </div>

            <div>
              <h4 className="text-blue-400 font-semibold mb-3">Key Achievements</h4>
              <ul className="space-y-2">
                {experiences[activeTab].achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
