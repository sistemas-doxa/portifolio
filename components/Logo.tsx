"use client"

import Image from "next/image"
import { useState } from "react"

interface LogoProps {
  className?: string
  variant?: "light" | "dark"
}

export function Logo({ className = "", variant = "light" }: LogoProps) {
  const [imageError, setImageError] = useState(false)
  const textColor = variant === "dark" ? "text-white" : "text-[#0F1F3D]"
  
  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="relative w-10 h-10 sm:w-12 sm:h-14 md:w-14 md:h-14">
          {!imageError ? (
            <Image
              src="/images/logo-doxa.png"
              alt="Doxa Sistemas Logo"
              width={56}
              height={56}
              className="object-contain"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#0F1F3D] to-[#C5A059] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">D</span>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <span className={`${textColor} font-bold text-base sm:text-lg md:text-xl leading-tight`}>DOXA</span>
          <span className={`${textColor} text-xs sm:text-sm leading-tight`}>SISTEMAS</span>
        </div>
      </div>
    </div>
  )
}
