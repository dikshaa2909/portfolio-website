"use client"

import { useState, useEffect } from "react"

interface TerminalProps {
  className?: string
}

export default function Terminal({ className = "" }: TerminalProps) {
  const [currentCommand, setCurrentCommand] = useState("")
  const [commandIndex, setCommandIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const commands = [
    { command: "git status", output: "On branch main\nYour branch is up to date with 'origin/main'.\n\nChanges to be committed:\n  (use \"git restore --staged <file>...\" to unstage)\n        modified:   portfolio.tsx\n        new file:   components/Terminal.tsx\n\nUntracked files:\n  (use \"git add <file>...\" to include in what will be committed)\n        components/CodeSnippet.tsx" },
    { command: "npm run build", output: "✓ Compiled successfully in 2.3s\n✓ Linting and type-checking passed\n✓ Optimized build for production\n\nBuild output:\n  dist/                 1.2 MB\n  dist/_next/static     234 kB\n  dist/_next/static/chunks  89 kB\n\nReady for deployment!" },
    { command: "echo 'Currently working on portfolio enhancements...'", output: "Currently working on portfolio enhancements..." },
    { command: "cat package.json | grep 'react-syntax-highlighter'", output: "\"react-syntax-highlighter\": \"^2.1.0\"," },
  ]

  useEffect(() => {
    const command = commands[commandIndex]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex < command.command.length) {
        setCurrentCommand(command.command.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCommandIndex((prev) => (prev + 1) % commands.length)
          setCurrentCommand("")
        }, 3000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [commandIndex])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className={`bg-gray-900/90 border border-gray-700 rounded-xl p-6 font-mono text-sm ${className}`}>
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-700">
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-400 text-xs">diksha@portfolio:~$</span>
      </div>

      {/* Terminal Content */}
      <div className="space-y-2">
        {commands.slice(0, commandIndex + 1).map((cmd, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-green-400">diksha@portfolio:~$</span>
              <span className="text-white">
                {index === commandIndex ? currentCommand : cmd.command}
                {index === commandIndex && showCursor && <span className="text-blue-400 animate-pulse">|</span>}
              </span>
            </div>
            {index < commandIndex && (
              <div className="text-gray-300 whitespace-pre-line pl-6">
                {cmd.output}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
