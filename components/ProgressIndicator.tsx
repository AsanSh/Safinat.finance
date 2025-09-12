'use client'

import { motion } from 'framer-motion'
import { Car } from 'lucide-react'

interface ProgressIndicatorProps {
  currentStep: number
  totalSteps: number
  steps: string[]
}

const ProgressIndicator = ({ currentStep, totalSteps, steps }: ProgressIndicatorProps) => {
  const progressPercentage = (currentStep / totalSteps) * 100

  return (
    <div className="w-full max-w-4xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
      {/* Progress Bar */}
      <div className="relative">
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
        
        {/* Car Icon */}
        <motion.div
          className="absolute top-1/2 transform -translate-y-1/2"
          style={{ left: `${Math.min(progressPercentage, 95)}%` }}
          initial={{ x: -12 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
            <Car className="w-4 h-4 text-white" />
          </div>
        </motion.div>
      </div>

      {/* Step Labels */}
      <div className="flex justify-between mt-3 sm:mt-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`text-xs sm:text-sm text-center ${
              index < currentStep
                ? 'text-primary-600 font-semibold'
                : index === currentStep - 1
                ? 'text-primary-600 font-semibold'
                : 'text-gray-400'
            }`}
          >
            <div className={`w-2 h-2 rounded-full mx-auto mb-1 ${
              index < currentStep
                ? 'bg-primary-600'
                : index === currentStep - 1
                ? 'bg-primary-600'
                : 'bg-gray-300'
            }`} />
            {step}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressIndicator
