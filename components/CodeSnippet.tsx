"use client"

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeSnippetProps {
  language: string
  code: string
  title?: string
  className?: string
}

export default function CodeSnippet({ language, code, title, className = "" }: CodeSnippetProps) {
  return (
    <div className={`bg-gray-900/90 border border-gray-700 rounded-xl overflow-hidden ${className}`}>
      {title && (
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border-b border-gray-700">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-300 text-xs font-medium">{title}</span>
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1rem',
          background: 'transparent',
          fontSize: '0.875rem',
          lineHeight: '1.5',
        }}
        showLineNumbers={true}
        wrapLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
