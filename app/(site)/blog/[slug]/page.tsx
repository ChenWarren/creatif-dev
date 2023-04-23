import { getBlog } from "@/sanity/util/blog-controller"

export default async function Post({params}: {params: {slug: string}}) {
  const { slug } = params
  const blog = await getBlog(slug)
  return (
    <main>
      <h1>{blog.title}</h1>
    </main>
  )
}
