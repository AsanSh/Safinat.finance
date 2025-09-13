'use client'

import Link from 'next/link'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
  shouldUseWhiteText?: boolean
}

const Logo = ({ className = '', showText = true, size = 'md', shouldUseWhiteText = false }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl'
  }

  return (
    <Link href="/" className={`flex items-center space-x-3 ${className}`}>
      {/* Logo SVG */}
      <div className={`${sizeClasses[size]} relative`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer decorative border */}
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="#1f2937"
            strokeWidth="4"
          />
          
          {/* Decorative pattern on border */}
          <g stroke="#d4af37" strokeWidth="1" fill="none">
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30) * (Math.PI / 180)
              const x1 = 50 + 44 * Math.cos(angle)
              const y1 = 50 + 44 * Math.sin(angle)
              const x2 = 50 + 40 * Math.cos(angle)
              const y2 = 50 + 40 * Math.sin(angle)
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
              )
            })}
          </g>

          {/* Inner white circle */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="white"
          />

          {/* Crescent moon */}
          <path
            d="M 35 35 Q 50 25 65 35 Q 50 45 35 35 Z"
            fill="#1f2937"
          />

          {/* Leaf */}
          <path
            d="M 40 40 Q 50 30 60 40 Q 50 50 40 40 Z"
            fill="#d4af37"
          />

          {/* Arabic text */}
          <text
            x="50"
            y="65"
            textAnchor="middle"
            className="text-xs font-bold fill-[#1f2937]"
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            اسائد
          </text>

          {/* Latin text */}
          <text
            x="50"
            y="78"
            textAnchor="middle"
            className="text-xs font-bold fill-[#1f2937]"
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            safinat
          </text>
          
          <text
            x="50"
            y="88"
            textAnchor="middle"
            className="text-xs font-bold fill-[#d4af37]"
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            .finance
          </text>
        </svg>
      </div>

      {/* Company name */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${textSizeClasses[size]} ${
            shouldUseWhiteText ? 'text-white' : 'text-gray-900'
          }`}>
            Safinat Finance
          </span>
          <span className={`text-xs hidden sm:block ${
            shouldUseWhiteText ? 'text-white text-opacity-80' : 'text-gray-600'
          }`}>
            Исламское финансирование
          </span>
        </div>
      )}
    </Link>
  )
}

export default Logo
