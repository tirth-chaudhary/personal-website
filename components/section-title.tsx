interface SectionTitleProps {
  title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold text-gray-700 mb-6">{title}</h2>
      <div className="flex justify-center">
        <div className="w-16 h-1 bg-primary"></div>
      </div>
    </div>
  )
}
