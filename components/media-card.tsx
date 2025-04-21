import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface MediaCardProps {
  title: string
  description: string
  date: string
  link: string
  imageUrl: string
  altText: string
}

export function MediaCard({ title, description, date, link, imageUrl, altText }: MediaCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative h-40 w-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={altText} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 text-white">
            <p className="text-sm font-medium">{date}</p>
            <h3 className="text-lg font-bold">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors"
        >
          Watch/Listen <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </div>
    </div>
  )
}
