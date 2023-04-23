import { getBlog } from "@/sanity/util/blog-controller"
import Image from "next/image"
import { PortableText } from "@portabletext/react"

export default async function Post({params}: {params: {slug: string}}) {
  const { slug } = params
  const post = await getBlog(slug)
  return (
    <main className='max-w-4xl min-h-screen mx-auto p-4 flex flex-col'>
      <h1 className="sm:text-3xl text-2xl">{post.title}</h1>
      <Image
        src={post.image}
        alt={post.title}
        width={320}
        height={300}
        sizes='(max-width: 600px) 100%, 320px'
      />
      <div>
        <PortableText value={post.content}/>
      </div>
    </main>
  )
}
