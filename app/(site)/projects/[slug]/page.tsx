import { getProject } from '@/sanity/util/project-controller'
import { RichTextImageComponent } from '@/components'
import { PortableText } from '@portabletext/react'
import { siteInfo } from '@/settings'
import Image from 'next/image'
import Link from 'next/link'

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
      <div className='flex gap-4'>
        { project.links && project.links.map(link => (
          <>
            <Link 
              key={link._id}
              href={link.linkUrl} 
              target='_blank'
              className="uppercase bg-[#FE7D75] text-white my-2 px-8 py-2 rounded-full hover:brightness-110 active:bg-[#D7605F] active:opacity-70 active:ease-in-out"
            >
              {link.linkText}
            </Link>
          </>
        ))}
      </div>
    </main>
  )
}

const components = {
  types: {
    image: RichTextImageComponent
  }
}