// Home blog section
// Display 4 featured blog posts 

import { Card } from "@/components"
import { Blog } from "@/types"

export default function HomeBlog({
  featuredBlogs,
}: {featuredBlogs: Blog[]})
 {
  return (
    <section className="w-full flex flex-col bg-[#DFDFDF]">
      {/* Heading start */}
      <div className="w-full sm:h-80 h-40 bg-white">
        <div className="w-full h-12 bg-[#49CEB2]"></div>
        <div className="h-full sm:max-w-5xl w-full mx-auto p-4 flex flex-col justify-center">
          <h2 className="sm:text-3xl text-2xl uppercase">
            Latest Blog
          </h2>
          <p className="sm:w-2/3 py-2 hidden sm:flex text-gray-500">
            We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
          </p>
        </div>
      </div>
      {/* Heading end  */}

      {/* Blog post grid start */}
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 mx-auto my-6 bg-[#DFDFDF]">
        {featuredBlogs && featuredBlogs.map((post) => (
          <div className="sm:col-span-1 sm:mx-auto mx-2" key={post._id}>
            <Card 
              imgUrl={post.image}
              title={post.title}
              excerpt={post.excerpt}
              baseHref="/blog"
              slug={post.slug}
            />
          </div>
        ))}
      </div>
      {/* Blog post grid end */} 
    </section>
  )
}
