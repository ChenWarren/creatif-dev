import { getBlog } from "@/sanity/util/blog-controller"
import Image from "next/image"
import { PortableText } from "@portabletext/react"

export default async function Post({params}: {params: {slug: string}}) {
  const { slug } = params
  const post = await getBlog(slug)
  return (
    <main className='max-w-4xl mx-auto p-4 flex flex-col'>
      <h1 className="sm:text-3xl text-2xl">{post.title}</h1>
      <Image
        src={post.image}
        alt={post.title}
        width={400}
        height={300}
        style={{maxWidth:'500px', maxHeight: '400px', objectFit: 'cover'}}
      />
      <div>
        <PortableText value={post.content}/>
      </div>
    </main>
  )
}
