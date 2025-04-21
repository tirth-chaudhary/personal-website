import { Download } from "lucide-react"

interface DownloadButtonProps {
  href: string
  label: string
  className?: string
}

export function DownloadButton({ href, label, className = "" }: DownloadButtonProps) {
  return (
    <a
      href={href}
      download
      className={`inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors ${className}`}
    >
      <Download className="w-4 h-4 mr-2" />
      {label}
    </a>
  )
}
