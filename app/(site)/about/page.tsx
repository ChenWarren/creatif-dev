import { PageHeader } from '@/blocks'
import { PageHeaderProps } from '@/types/pageHeaderProps'

const aboutHeaderProps: PageHeaderProps = {
  title:  'About',
  subtitle: 'Hi there',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.',
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
