import { Card } from "../components/Card"
import { Blog } from "@/types/blog"

export default function HomeBlog({
  featuredBlogs,
}: {featuredBlogs: Blog[]})
 {
  return (
    <section className="w-full flex flex-col bg-[#DFDFDF]">
      <div className="h-10 w-full bg-[#5DD9BF] flex sm:hidden"></div>
      <div className="w-full sm:h-[300px] bg-white">
        <div className="bg-white justify-end sm:flex hidden">
          <div className="sm:h-16 h-10 sm:w-1/2 pb-5 w-full bg-[#5DD9BF] sm:rounded-bl-full"></div>
        </div>
        <div className="h-full max-w-4xl mx-auto p-4 flex flex-col justify-start">
          <h2 className="sm:text-3xl text-2xl uppercase">
            Latest Blog
          </h2>
          <p className="sm:w-2/3 py-2 hidden sm:flex text-gray-500">
            We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
          </p>
        </div>
      </div>
        <div className="w-full sm:h-[28rem] relative bg-[#DFDFDF]">
          <div className="w-full sm:h-[30rem] sm:absolute sm:top-0 flex sm:flex-row flex-col justify-center items-center gap-4">
          {featuredBlogs && featuredBlogs.map((post) => (
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
          </div>
        </div>
      <div className="bg-[#DFDFDF] flex">
        <div className="sm:h-16 h-10 sm:w-1/2 pb-5 w-full bg-[#5DD9BF] sm:rounded-tr-full"></div>
      </div>
    </section>
  )
}
