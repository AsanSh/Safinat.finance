'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface SearchButtonProps {
  shouldUseWhiteText?: boolean
}

const SearchButton = ({ shouldUseWhiteText = false }: SearchButtonProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Здесь можно добавить логику поиска
      console.log('Searching for:', searchQuery)
    }
  }

  return (
    <div className="relative">
      {!isExpanded ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(true)}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
            shouldUseWhiteText 
              ? 'bg-white bg-opacity-20 hover:bg-opacity-30' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          <Search className={`w-5 h-5 ${shouldUseWhiteText ? 'text-white' : 'text-gray-800'}`} />
        </motion.button>
      ) : (
        <motion.div
          initial={{ width: 40 }}
          animate={{ width: 300 }}
          exit={{ width: 40 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`rounded-full overflow-hidden ${
            shouldUseWhiteText ? 'bg-white bg-opacity-20' : 'bg-gray-200'
          }`}
        >
          <form onSubmit={handleSearch} className="flex items-center h-10 px-4">
            <Search className={`w-5 h-5 mr-3 flex-shrink-0 ${shouldUseWhiteText ? 'text-white' : 'text-gray-600'}`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск..."
              className={`flex-1 bg-transparent outline-none text-sm ${
                shouldUseWhiteText 
                  ? 'text-white placeholder-white placeholder-opacity-70' 
                  : 'text-gray-800 placeholder-gray-500'
              }`}
              autoFocus
            />
            <button
              type="button"
              onClick={() => {
                setIsExpanded(false)
                setSearchQuery('')
              }}
              className={`ml-2 p-1 rounded-full transition-colors duration-200 ${
                shouldUseWhiteText ? 'hover:bg-white hover:bg-opacity-20' : 'hover:bg-gray-300'
              }`}
            >
              <X className={`w-4 h-4 ${shouldUseWhiteText ? 'text-white' : 'text-gray-600'}`} />
            </button>
          </form>
        </motion.div>
      )}
    </div>
  )
}

export default SearchButton
