import { Card } from "@/components"
import { getBlogs } from "@/sanity/util/blog-controller"
import { Blog } from "@/types/blog"
import { PageHeaderProps } from "@/types/pageHeaderProps"
import { PageHeader } from '@/blocks'


const blogHeaderProps: PageHeaderProps = {
  title:  'Blog',
  subtitle: 'Featured Post',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Quisquam, quidem. Quisquam, quidem. Quisquam, quidem. Quisquam, quidem. Quisqu'
}

export default async function Blog() {
  const blogs: Blog[] = await getBlogs()

  return (
    <>
      <PageHeader props={blogHeaderProps}/>
      <main className="max-w-5xl min-h-screen mx-auto p-4 flex flex-col items-center">
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
    </>
  )
}
