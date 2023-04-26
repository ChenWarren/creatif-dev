/**
 * Card component with photo take all space and text flowing over the photo
 * 
 */

import Image from "next/image"
import Link from "next/link"

export function PhotoCard({
  imgUrl='/placeholder.png',
  title='Card Title',
  category='Card category',
  baseHref = '/',
  slug=''
}) {
  return (
    <div className="sm:max-w-lg relative h-[32rem] shadow-sm bg-white drop-shadow rounded-md overflow-hidden">
      <Link
        href={`${baseHref}/${slug}`}
      >
        <div>
          <Image
            src={imgUrl}
            alt={title}
            width={512}
            height={512}
            style={{maxWidth: '100%', margin: 'auto', height: '512px', objectFit: 'cover'}}
            className="rounded-md hover:scale-105 hover:brightness-75 transition-all duration-300"
          />
        </div>
        <div className="absolute flex flex-col justify-start bottom-4 text-[white]">
          <h2 className="p-2 w-fit m-4 text-xl bg-black opacity-70 rounded-md">{title.length > 52 ? `${title.slice(0.52)}...`: title}</h2>
          <p className="p-2 w-fit bg-black opacity-60 mx-4 rounded-md">{category.length > 100 ? `${category.slice(0, 100)}...` : category}</p>
        </div>
      </Link>
    </div>
  )
}
