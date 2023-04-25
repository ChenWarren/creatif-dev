import { Card } from "../components/Card"
import { Blog } from "@/types/blog"

export default function HomeBlog({
  featuredBlogs,
}: {featuredBlogs: Blog[]})
 {
  return (
    <section className="w-full flex flex-col bg-[#DFDFDF]">
      <div className="w-full sm:h-80 h-40 bg-white">
        <div className="w-full h-12 bg-[#49CEB2]"></div>
        <div className="h-full sm:max-w-4xl mx-auto p-4 flex flex-col justify-center">
          <h2 className="sm:text-3xl text-2xl uppercase">
            Latest Blog
          </h2>
          <p className="sm:w-2/3 py-2 hidden sm:flex text-gray-500">
            We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
          </p>
        </div>
      </div>
        <div className="w-full bg-[#DFDFDF]">
          <div className="w-full sm:h-[30rem] flex sm:flex-row flex-col justify-center items-center gap-4 sm:mb-6 sm:mt-0 mb-2 mt-8">
          {featuredBlogs && featuredBlogs.map((post) => (
            <div key={post._id}>
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
        </div>
    </section>
  )
}
