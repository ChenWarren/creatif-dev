import { getProject } from '@/sanity/util/project-controller'
import React from 'react'

export default async function Project({params}: {params: {slug: string}}) {
  const { slug } = params
  const project = await getProject(slug)

  return (
    <main>
      <h1>{project.name}</h1>

    </main>
  )
}
