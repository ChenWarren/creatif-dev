import { PhotoCard } from "@/components"
import { Project } from "@/types"

export default function HomeProjects({
  featuredProjects,
}: {featuredProjects: Project[]}) {
  return (
    <section className="w-full flex flex-col bg-[#DFDFDF]">
      {/* Heading start */}
      <div className="w-full sm:h-80 h-40 bg-white">
        <div className="w-full h-12 bg-[#49CEB2]"></div>
        <div className="h-full sm:max-w-5xl mx-auto p-4 flex flex-col justify-center">
          <h2 className="sm:text-3xl text-2xl uppercase">
            Projects
          </h2>
          <p className="sm:w-2/3 py-2 hidden sm:flex text-gray-500">
            We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
          </p>
        </div>
      </div>
      {/* Heading end  */}
      {/* Projects grid start */}
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 mx-auto my-6 bg-[#DFDFDF]">
        {featuredProjects && featuredProjects.map((project) => (
          <div className="sm:col-span-1 sm:mx-auto mx-2" key={project._id} >
            <PhotoCard 
              imgUrl={project.image}
              title={project.name}
              categories={project.categories}
              baseHref="/projects"
              slug={project.slug}
            />
          </div>
        ))}
      </div>
      {/* Projects grid end */}
    </section>
  )
}
