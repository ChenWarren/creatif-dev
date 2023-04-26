/**
 * Card component with photo take all space and text flowing over the photo
 * 
 */

import Image from "next/image"
import Link from "next/link"
import { Category } from "@/types/category"

interface PhotoCardProps {
  imgUrl: string
  title: string
  categories: Category[]
  baseHref: string
  slug: string
}

export function PhotoCard({
  imgUrl='/placeholder.png',
  title='Card Title',
  categories,
  baseHref = '/',
  slug=''
}: PhotoCardProps) {


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
            className="rounded-md hover:scale-105 hover:brightness-100 brightness-75 transition-all duration-300"
          />
        </div>
        <div className="absolute flex flex-col justify-start bottom-4 text-[white]">
          <h2 className="p-2 w-fit m-4 text-xl bg-black opacity-70 rounded-md">{title.length > 52 ? `${title.slice(0.52)}...`: title}</h2>
          <div className="w-fit flex flex-row justify-start mx-4">
            {categories && categories.map((category, i) => (
              <p key={i} className="p-2 w-fit bg-black opacity-60 mr-2 rounded-md">{`${category}`}</p>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}
