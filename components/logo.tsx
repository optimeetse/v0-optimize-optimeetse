"use client"

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "light" | "dark" | "color"
  showText?: boolean
  className?: string
}

export default function Logo({ size = "md", variant = "color", showText = true, className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
    xl: "h-24 w-24",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-4xl",
  }

  const colors = {
    light: {
      primary: "#ffffff",
      secondary: "#f1f5f9",
      text: "#ffffff",
    },
    dark: {
      primary: "#1e293b",
      secondary: "#475569",
      text: "#1e293b",
    },
    color: {
      primary: "#06b6d4",
      secondary: "#0891b2",
      text: "#1e293b",
    },
  }

  const currentColors = colors[variant]

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} flex-shrink-0`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r="48"
            fill={currentColors.primary}
            stroke={currentColors.secondary}
            strokeWidth="2"
          />

          {/* Meeting/Connection Symbol */}
          <g transform="translate(50,50)">
            {/* Central Hub */}
            <circle cx="0" cy="0" r="8" fill={currentColors.secondary} />

            {/* Connection Lines */}
            <line
              x1="0"
              y1="0"
              x2="-20"
              y2="-15"
              stroke={currentColors.secondary}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="0"
              x2="20"
              y2="-15"
              stroke={currentColors.secondary}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="0"
              x2="-20"
              y2="15"
              stroke={currentColors.secondary}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="0"
              x2="20"
              y2="15"
              stroke={currentColors.secondary}
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* People/Meeting Nodes */}
            <circle cx="-20" cy="-15" r="6" fill="white" stroke={currentColors.secondary} strokeWidth="2" />
            <circle cx="20" cy="-15" r="6" fill="white" stroke={currentColors.secondary} strokeWidth="2" />
            <circle cx="-20" cy="15" r="6" fill="white" stroke={currentColors.secondary} strokeWidth="2" />
            <circle cx="20" cy="15" r="6" fill="white" stroke={currentColors.secondary} strokeWidth="2" />

            {/* Small person icons in nodes */}
            <g transform="translate(-20,-15)">
              <circle cx="0" cy="-1" r="1.5" fill={currentColors.secondary} />
              <path d="M -2,2 Q 0,1 2,2" stroke={currentColors.secondary} strokeWidth="1" fill="none" />
            </g>
            <g transform="translate(20,-15)">
              <circle cx="0" cy="-1" r="1.5" fill={currentColors.secondary} />
              <path d="M -2,2 Q 0,1 2,2" stroke={currentColors.secondary} strokeWidth="1" fill="none" />
            </g>
            <g transform="translate(-20,15)">
              <circle cx="0" cy="-1" r="1.5" fill={currentColors.secondary} />
              <path d="M -2,2 Q 0,1 2,2" stroke={currentColors.secondary} strokeWidth="1" fill="none" />
            </g>
            <g transform="translate(20,15)">
              <circle cx="0" cy="-1" r="1.5" fill={currentColors.secondary} />
              <path d="M -2,2 Q 0,1 2,2" stroke={currentColors.secondary} strokeWidth="1" fill="none" />
            </g>
          </g>
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${textSizeClasses[size]} leading-tight`} style={{ color: currentColors.text }}>
            OptiMeet
          </span>
          <span className={`text-xs opacity-75 leading-tight`} style={{ color: currentColors.text }}>
            Sales Engine
          </span>
        </div>
      )}
    </div>
  )
}
