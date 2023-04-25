/**
* Card component for displaying blog posts/projects
* Params:
* imgUrl - url of the image
* title - title of the post/project
* excerpt - excerpt of the post/project
* baseHref - base href of the blog for link href base
* slug - slug of the post/project for link
*/ 

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
    <div className="sm:max-w-lg h-[32rem] shadow-sm bg-white drop-shadow rounded-md">
      <Link
        href={`${baseHref}/${slug}`}
      >
        <div>
          <Image
            src={imgUrl}
            alt={title}
            width={520}
            height={300}
            style={{maxWidth: '100%', margin: 'auto', height: '300px', objectFit: 'cover'}}
            className="rounded-t-md"
          />
        </div>
        <h2 className="w-full h-20 p-4 mt-2 text-xl">{title.length > 52 ? `${title.slice(0.52)}...`: title}</h2>
        <p className="p-4 text-gray-500">{excerpt.length > 100 ? `${excerpt.slice(0, 100)}...` : excerpt}</p>
      </Link>
    </div>
  )
}
