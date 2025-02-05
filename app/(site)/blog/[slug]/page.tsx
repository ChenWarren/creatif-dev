import { getBlog } from "@/sanity/util/blog-controller"
import { getSetting } from "@/sanity/util/settings-controller"
import Image from "next/image"
import { PostComment } from "@/blocks"
import { AvatarWidget, RichTextImageComponent } from "@/components"
import { PortableText } from "@portabletext/react"
import { Blog, Setting } from "@/types"
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
  const commentSetting: Setting = await getSetting('post-comment')
  const post: Blog = await getBlog(slug)

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
      { (commentSetting.value || siteInfo.postComment )
        && <PostComment _id={post._id} comments={post.comments} slug={post.slug}/>
      }
    </main>
  )
}

const components = {
  types: {
    image: RichTextImageComponent
  }
}
