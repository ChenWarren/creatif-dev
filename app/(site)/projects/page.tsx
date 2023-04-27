import { getProjects } from '@/sanity/util/project-controller'
import { Project } from '@/types/project'
import { Card } from '@/components'
import { PageHeader } from '@/blocks'
import { PageHeaderProps } from '@/types/pageHeaderProps'

const projectHeaderProps: PageHeaderProps = {
  title:  'Projects',
  subtitle: 'Featured Projects',
  description: 'Here are a few of my projects',
}

export default async function Projects() {
  const projects: Project[] = await getProjects()

  return (
    <>
    <PageHeader props={projectHeaderProps}/>
    <main className='max-w-5xl min-h-screen mx-auto p-4 flex flex-col items-center'>
      <section className="grid sm:grid-cols-2 grid-cols-1 gap-6 mx-auto my-6">
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
    </>
  )
}
