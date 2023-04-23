import { getProject } from '@/sanity/util/project-controller'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

export default async function Project({params}: {params: {slug: string}}) {
  const { slug } = params
  const project = await getProject(slug)

  return (
    <main className='max-w-4xl mx-auto p-4 flex flex-col'>
      <h1 className="sm:text-3xl text-2xl">{project.name}</h1>
      <Image
        src={project.image}
        alt={project.name}
        width={400}
        height={300}
        style={{maxWidth:'500px', maxHeight: '400px', objectFit: 'cover'}}
      />
      <div>
        <PortableText value={project.content}/>
      </div>
    </main>
  )
}
