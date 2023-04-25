import { Card } from "@/components"
import { getBlogs } from "@/sanity/util/blog-controller"
import { Blog } from "@/types/blog"

export default async function Blog() {
  const blogs: Blog[] = await getBlogs()

  return (
    <main className="max-w-4xl min-h-screen mx-auto p-4 flex flex-col items-center">
      <h1 className="w-full sm:text-3xl text-2xl">Blog</h1>
      <section className="grid sm:grid-cols-2 grid-cols-1 gap-6 mx-auto my-6">
        {blogs.map((post) => (
          <div key={post._id} >
            <Card
              imgUrl={post.image}
              title={post.title}
              excerpt={post.excerpt}
              baseHref="/blog"
              slug={post.slug}
            />
          </div>
        ))}
      </section>
    </main>
  )
}
