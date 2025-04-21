"use client"

import { useState, useEffect } from "react"
import { Home, User, FileText, BookOpen, Mail, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    const handleScroll = () => {
      const sections = ["home", "about", "resume", "research", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
      if (isMobile) {
        setIsOpen(false)
      }
    }
  }

  const isActive = (section: string) => {
    return activeSection === section
  }

  return (
    <>
      {/* Mobile menu button */}
      {isMobile && (
        <button
          onClick={toggleMenu}
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-primary text-white"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      )}

      {/* Desktop navbar */}
      {!isMobile && (
        <div className="fixed left-0 top-0 h-full w-16 bg-white shadow-md flex flex-col items-center py-8 space-y-8 z-40">
          <button
            onClick={() => scrollToSection("home")}
            className={cn(
              "p-3 rounded-full transition-colors",
              isActive("home") ? "bg-primary text-white" : "hover:bg-gray-100",
            )}
          >
            <Home className="w-6 h-6" />
            <span className="sr-only">Home</span>
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className={cn(
              "p-3 rounded-full transition-colors",
              isActive("about") ? "bg-primary text-white" : "hover:bg-gray-100",
            )}
          >
            <User className="w-6 h-6" />
            <span className="sr-only">About</span>
          </button>

          <button
            onClick={() => scrollToSection("resume")}
            className={cn(
              "p-3 rounded-full transition-colors",
              isActive("resume") ? "bg-primary text-white" : "hover:bg-gray-100",
            )}
          >
            <FileText className="w-6 h-6" />
            <span className="sr-only">Resume</span>
          </button>

          <button
            onClick={() => scrollToSection("research")}
            className={cn(
              "p-3 rounded-full transition-colors",
              isActive("research") ? "bg-primary text-white" : "hover:bg-gray-100",
            )}
          >
            <BookOpen className="w-6 h-6" />
            <span className="sr-only">Research</span>
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className={cn(
              "p-3 rounded-full transition-colors",
              isActive("contact") ? "bg-primary text-white" : "hover:bg-gray-100",
            )}
          >
            <Mail className="w-6 h-6" />
            <span className="sr-only">Contact</span>
          </button>
        </div>
      )}

      {/* Mobile menu */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}>
          <div
            className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-4 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-4 mt-12">
              <button
                onClick={() => scrollToSection("home")}
                className={cn(
                  "p-3 flex items-center transition-colors",
                  isActive("home") ? "text-primary font-semibold" : "",
                )}
              >
                <Home className="w-6 h-6 mr-3" />
                <span>Home</span>
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className={cn(
                  "p-3 flex items-center transition-colors",
                  isActive("about") ? "text-primary font-semibold" : "",
                )}
              >
                <User className="w-6 h-6 mr-3" />
                <span>About</span>
              </button>

              <button
                onClick={() => scrollToSection("resume")}
                className={cn(
                  "p-3 flex items-center transition-colors",
                  isActive("resume") ? "text-primary font-semibold" : "",
                )}
              >
                <FileText className="w-6 h-6 mr-3" />
                <span>Resume</span>
              </button>

              <button
                onClick={() => scrollToSection("research")}
                className={cn(
                  "p-3 flex items-center transition-colors",
                  isActive("research") ? "text-primary font-semibold" : "",
                )}
              >
                <BookOpen className="w-6 h-6 mr-3" />
                <span>Research</span>
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className={cn(
                  "p-3 flex items-center transition-colors",
                  isActive("contact") ? "text-primary font-semibold" : "",
                )}
              >
                <Mail className="w-6 h-6 mr-3" />
                <span>Contact</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
