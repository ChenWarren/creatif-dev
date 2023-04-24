import { getProjects } from '@/sanity/util/project-controller'
import { Project } from '@/types/project'
import { Card } from '@/components'

export default async function Projects() {
  const projects: Project[] = await getProjects()

  return (
    <main className='max-w-4xl min-h-screen mx-auto p-4 flex flex-col'>
      <h1 className="sm:text-3xl text-2xl">Projects</h1>
      <section className="flex flex-row gap-3">
        {projects.map((project) => (
          <div key={project._id} >
            <Card
              imgUrl={project.image}
              title={project.name}
              excerpt={project.excerpt}
              baseHref='/projects'
              slug={project.slug}
            />
          </div>
        ))}
      </section>
    </main>
  )
}
