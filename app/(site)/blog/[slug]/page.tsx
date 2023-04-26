import { getBlog } from "@/sanity/util/blog-controller"
import Image from "next/image"
import { RichTextImageComponent } from "@/components"
import { PortableText } from "@portabletext/react"
import { Blog } from "@/types/blog"

export default async function Post({params}: {params: {slug: string}}) {
  const { slug } = params
  const post: Blog = await getBlog(slug)

  return (
    <main className='max-w-4xl min-h-screen mx-auto p-4 flex flex-col'>
      <h1 className="sm:text-3xl text-2xl">{post.title}</h1>
      <div className="flex items-center my-4">
        <Image
          src={post.author.profile_image}
          alt={post.author.name}
          width={50}
          height={50}
          className="rounded-full mr-2"
        />
        <h3>{post.author.name}</h3>
        <p>{post._createAt && post._createAt.toLocaleDateString()}</p>
      </div>
      <article>
        <div className="w-full flex justify-center">
          <Image
            src={post.image}
            alt={post.title}
            width={700}
            height={300}
            sizes='(max-width: 700px) 100%, 320px'
          />
        </div>
        <div>
          <PortableText value={post.content} components={components}/>
        </div>
      </article>
    </main>
  )
}

const components = {
  types: {
    image: RichTextImageComponent
  }
}