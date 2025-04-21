"use client"

import { useState, useEffect } from "react"

interface TypewriterProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenWords?: number
}

export function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
}: TypewriterProps) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    if (!words || words.length === 0) return

    const currentWord = words[wordIndex]

    const handleTyping = () => {
      if (isWaiting) return

      if (!isDeleting) {
        // Typing
        if (text.length < currentWord.length) {
          setText(currentWord.substring(0, text.length + 1))
        } else {
          // Start waiting before deleting
          setIsWaiting(true)
          setTimeout(() => {
            setIsWaiting(false)
            setIsDeleting(true)
          }, delayBetweenWords)
        }
      } else {
        // Deleting
        if (text.length > 0) {
          setText(currentWord.substring(0, text.length - 1))
        } else {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : isWaiting ? delayBetweenWords : typingSpeed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, isWaiting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords])

  return (
    <span className="inline-block">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}
