
export function TextCard({
  title = 'Title',
  description = 'Description here',
}: {
  title: string
  description: string
}
) {
  return (
    <div className="w-[200px] h-[160px] p-5 text-white">
      <h3 className="text-lg">{title}</h3>
      <div className="w-2/3 h-2 bg-[#156766]"></div>
      <p className="text-sm text-gray-400 mt-4">{description}</p>
    </div>
  )
}