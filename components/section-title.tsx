interface SectionTitleProps {
  title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-700 mb-4">{title}</h2>
      <div className="flex justify-center">
        <div className="w-12 h-0.5 bg-primary"></div>
      </div>
    </div>
  )
}
