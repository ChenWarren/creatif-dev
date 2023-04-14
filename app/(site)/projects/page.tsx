import { getProjects } from '@/sanity/util/project-controller'
import { Project } from '@/types/project'
import Link from 'next/link'
import React from 'react'

export default async function Projects() {
  const projects: Project[] = await getProjects()

  return (
    <main>
      <h1>Projects</h1>
      {projects.map((project) => (
        <Link
          key={project._id}
          href={`/projects/${project.slug}`}
        >
          <h2>{project.name}</h2>
        </Link>
      ))}
    </main>
  )
}
