"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface ProgressBarProps {
  label: string
  value: number
  suffix?: string
  color?: string
}

export function ProgressBar({ label, value, suffix = "%", color = "bg-[#C5A059]" }: ProgressBarProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm sm:text-base font-medium text-gray-700">{label}</span>
        <span className="text-sm sm:text-base font-bold text-[#0F1F3D]">
          {isInView ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {value}{suffix}
            </motion.span>
          ) : (
            "0{suffix}"
          )}
        </span>
      </div>
      <div className="w-full h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

