import { getBlog } from "@/sanity/util/blog-controller"
import Image from "next/image"
import { PostComment } from "@/blocks"
import { RichTextImageComponent } from "@/components"
import { PortableText } from "@portabletext/react"
import { Blog } from "@/types/blog"
import { siteInfo } from '@/settings'

export async function generateMetadata({params}: {params: {slug: string}}) {
  const { slug } = params
  const project = await getBlog(slug)

  return {
    title:`${project.title} | ${siteInfo.title}`,
    description: project.excerpt
  }
}

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
        <div className="flex flex-col">
          <h3 className="font-medium">{post.author.name}</h3>
          <p className="text-gray-500 text-sm">{new Date(post.publishedAt).toDateString()}</p>
        </div>
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
      <PostComment postSlug={slug}/>
    </main>
  )
}

const components = {
  types: {
    image: RichTextImageComponent
  }
}