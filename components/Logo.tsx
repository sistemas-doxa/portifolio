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
      <div className="flex items-center gap-3">
        <div className="relative w-14 h-14">
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
            <div className="w-14 h-14 bg-gradient-to-br from-[#0F1F3D] to-[#C5A059] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">D</span>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <span className={`${textColor} font-bold text-xl leading-tight`}>DOXA</span>
          <span className={`${textColor} text-sm leading-tight`}>SISTEMAS</span>
        </div>
      </div>
    </div>
  )
}
