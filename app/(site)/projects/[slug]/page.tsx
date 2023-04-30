import { getProject } from '@/sanity/util/project-controller'
import { RichTextImageComponent } from '@/components'
import { PortableText } from '@portabletext/react'
import { siteInfo } from '@/settings'
import Image from 'next/image'

export async function generateMetadata({params}: {params: {slug: string}}) {
  const { slug } = params
  const project = await getProject(slug)

  return {
    title: `${project.name} | ${siteInfo.title}`,
    description: project.excerpt
  }
}

export default async function Project({params}: {params: {slug: string}}) {
  const { slug } = params
  const project = await getProject(slug)

  return (
    <main className='max-w-4xl min-h-screen mx-auto p-4 flex flex-col'>
      <h1 className="sm:text-3xl text-2xl">{project.name}</h1>
      <Image
        src={project.image}
        alt={project.name}
        width={320}
        height={300}
        sizes='(max-width: 600px) 100%, 320px'
      />
      <div>
        <PortableText value={project.content} components={components}/>
      </div>
    </main>
  )
}

const components = {
  types: {
    image: RichTextImageComponent
  }
}