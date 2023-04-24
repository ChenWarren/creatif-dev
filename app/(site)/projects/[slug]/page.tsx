import { getProject } from '@/sanity/util/project-controller'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { PortableTextBlock } from 'sanity'

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
        <PortableText value={project.content}/>
      </div>
    </main>
  )
}

