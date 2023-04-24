import Image from "next/image"
import Link from "next/link"

export const Card = ({
  imgUrl='/placeholder.png',
  title='Card Title',
  excerpt='Card excerpt',
  baseHref = '/',
  slug=''
}) => {

  return (
    <div className="w-[18rem] h-[32rem] shadow-sm mb-5 bg-white drop-shadow">
      <Link
        href={`${baseHref}/${slug}`}
      >
        <Image
          src={imgUrl}
          alt={title}
          width={320}
          height={300}
          style={{width: '320px',height: '300px', objectFit: 'cover'}}
        />
        <h2 className="w-full h-20 p-4 mt-2 text-xl">{title.length > 52 ? `${title.slice(0.52)}...`: title}</h2>
        <p className="p-4 text-gray-500">{excerpt.length > 100 ? `${excerpt.slice(0, 100)}...` : excerpt}</p>
      </Link>
    </div>
  )
}
