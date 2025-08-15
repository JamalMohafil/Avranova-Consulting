"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface LoadingProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "dots" | "pulse" | "wave" | "orbit" | "gradient"
}

const Loading: React.FC<LoadingProps> = ({ className, size = "md", variant = "gradient" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  const dotSizes = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  }

  const renderVariant = () => {
    switch (variant) {
      case "dots":
        return (
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={cn("rounded-full bg-gradient-to-r from-blue-400 to-blue-600 animate-bounce", dotSizes[size])}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: "1.4s",
                }}
              />
            ))}
          </div>
        )

      case "pulse":
        return (
          <div className="relative">
            <div
              className={cn(
                "rounded-full bg-gradient-to-r from-blue-400 to-blue-600 animate-ping absolute",
                sizeClasses[size],
              )}
            />
            <div
              className={cn("rounded-full bg-gradient-to-r from-blue-500 to-blue-700 animate-pulse", sizeClasses[size])}
            />
          </div>
        )

      case "wave":
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-blue-400 to-blue-600 rounded-full animate-pulse"
                style={{
                  height: size === "sm" ? "16px" : size === "md" ? "24px" : "32px",
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: "1s",
                }}
              />
            ))}
          </div>
        )

      case "orbit":
        return (
          <div className={cn("relative", sizeClasses[size])}>
            <div className="absolute inset-0 rounded-full border-2 border-gray-200 dark:border-gray-700" />
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 border-r-blue-400 animate-spin" />
            <div
              className="absolute inset-2 rounded-full border-2 border-transparent border-b-blue-600 border-l-blue-500 animate-spin"
              style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
            />
          </div>
        )

      case "gradient":
      default:
        return (
          <div className="relative">
            <div
              className={cn(
                "rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-spin",
                sizeClasses[size],
              )}
              style={{
                background: "conic-gradient(from 0deg, #3b82f6, #1d4ed8, #2563eb, #3b82f6)",
                animationDuration: "1s",
              }}
            >
              <div className={cn("absolute inset-1 rounded-full  dark:bg-gray-900")} />
            </div>
            <div
              className={cn(
                "absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-600/20 animate-ping",
                sizeClasses[size],
              )}
            />
          </div>
        )
    }
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center",
        "bg-white/90 dark:bg-gray-900/95 backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex flex-col items-center space-y-4">
        {renderVariant()}
        <div className="text-center">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 animate-pulse">Loading...</p>
          <div className="flex space-x-1 mt-2 justify-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: "1.5s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
