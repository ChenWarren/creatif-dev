import { PageHeader } from '@/blocks'
import { PageHeaderProps } from '@/types'
import { siteInfo } from '@/settings'

const aboutHeaderProps: PageHeaderProps = {
  title:  'About',
  subtitle: 'Hi there',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.',
}

export const metadata = {
  title: `${aboutHeaderProps.title} | ${siteInfo.title}`,
  description: aboutHeaderProps.description,
}

export default function About() {
  return (
    <>
      <PageHeader props={aboutHeaderProps}/>
      <main className='min-h-screen flex flex-col'>
      </main>
    </>
  )
}
