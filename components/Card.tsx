import Image from "next/image"

export const Card = ({
  imgUrl='/placeholder.png',
  title='Card Title',
  excerpt='Card excerpt'
}) => {

  return (
    <div className="w-80 h-[32rem] shadow-sm mb-5 bg-white drop-shadow">
      <Image
        src={imgUrl}
        alt={title}
        width={320}
        height={240}
      />
      <h2 className="p-4 mt-2 text-2xl">{title}</h2>
      <p className="p-4">{excerpt}</p>
    </div>
  )
}
