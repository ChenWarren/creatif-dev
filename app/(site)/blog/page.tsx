import { Card } from "@/components"
import { getBlogs } from "@/sanity/util/blog-controller"
import { Blog } from "@/types/blog"

export default async function Blog() {
  const blogs: Blog[] = await getBlogs()

  return (
    <main className="max-w-4xl mx-auto p-4 flex flex-col">
      <h1>Blog</h1>
      <section>
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
