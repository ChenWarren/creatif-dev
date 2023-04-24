import { Card } from "../components/Card"
import { Project } from "@/types/project"

export default function HomeProjects({
  featuredProjects,
}: {featuredProjects: Project[]}) {
  return (
    <section className="w-full flex flex-col bg-[#DFDFDF]">
      <div className="h-10 w-full bg-[#5DD9BF] flex sm:hidden"></div>
      <div className="w-full sm:h-[300px] bg-white">
        <div className="h-full max-w-4xl mx-auto p-4 flex flex-col justify-center">
          <h2 className="sm:text-3xl text-2xl uppercase">
            Projects
          </h2>
          <p className="sm:w-2/3 py-2 hidden sm:flex text-gray-500">
            We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
          </p>
        </div>
      </div>
      <div className="w-full sm:h-[34rem] relative bg-[#DFDFDF]">
        <div className="bg-white flex">
          <div className="sm:h-16 h-10 sm:w-2/3 pb-5 w-full bg-[#5DD9BF]"></div>
        </div>
        <div className="w-full sm:h-[32rem] sm:absolute sm:top-0 flex sm:flex-row flex-col justify-center items-center ">
          {featuredProjects && featuredProjects.map((project) => (
            <div key={project._id} >
              <Card 
                imgUrl={project.image}
                title={project.name}
                excerpt={project.excerpt}
                baseHref="/projects"
                slug={project.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
