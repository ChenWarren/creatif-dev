import { getBlogs } from "@/sanity/util/blog-controller"
import { Blog } from "@/types/blog"
import Link from "next/link"

export default async function Blog() {
  const blogs: Blog[] = await getBlogs()

  return (
    <main>
      <div>Blog</div>
      {blogs.map((blog) => (
        <Link key={blog._id} href={`/blog/${blog.slug}`}>
          <h2>{blog.title}</h2>
        </Link>
      ))}
    </main>
  )
}
