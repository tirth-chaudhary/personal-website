import { Linkedin, Instagram, AtSign, Github } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <a
        href="https://www.linkedin.com/in/tirthchaudhary/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-[#0077B5] hover:bg-opacity-80 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-3.5 h-3.5" />
      </a>
      <a
        href="https://github.com/tirth-chaudhary"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-[#333] hover:bg-opacity-80 transition-colors"
        aria-label="GitHub"
      >
        <Github className="w-3.5 h-3.5" />
      </a>
      <a
        href="https://www.instagram.com/tirthchaudharyy/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-[#E4405F] hover:bg-opacity-80 transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="w-3.5 h-3.5" />
      </a>
      <a
        href="mailto:tirth.chaudhary@umanitoba.ca"
        className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-[#1DA1F2] hover:bg-opacity-80 transition-colors"
        aria-label="Email"
      >
        <AtSign className="w-3.5 h-3.5" />
      </a>
    </div>
  )
}
