import { getBlog, getBlogComments } from "@/sanity/util/blog-controller"
import Image from "next/image"
import { PostComment } from "@/blocks"
import { AvatarWidget, RichTextImageComponent } from "@/components"
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
  const comments = await getBlogComments(post._id)

  return (
    <main className='max-w-4xl min-h-screen mx-auto p-4 flex flex-col'>
      <h1 className="sm:text-3xl text-2xl">{post.title}</h1>
      <AvatarWidget props={{
        image: post.author.profile_image, 
        name: post.author.name, 
        description: new Date(post.publishedAt).toDateString()}}
      />
      <article className="my-6">
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
      {comments.length > 0 
      && <PostComment comments={comments}/> }
    </main>
  )
}

const components = {
  types: {
    image: RichTextImageComponent
  }
}
