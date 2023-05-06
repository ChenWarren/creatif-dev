import { getBlog } from "@/sanity/util/blog-controller"
import { siteInfo } from '@/settings'

export async function generateMetadata({params}: {params: {slug: string}}) {

  const { slug } = params
  const project = await getBlog(slug)

  return {
    title:`${project.title} | ${siteInfo.title}`,
    description: project.excerpt
  }
}

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
       {children}
    </>
  )
}




