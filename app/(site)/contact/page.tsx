import { PageHeader } from '@/blocks'
import { PageHeaderProps } from '@/types/pageHeaderProps'

const contactHeaderProps: PageHeaderProps = {
  title: 'Contact',
  subtitle: 'Get in touch',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ipsum nibh. Ut velit urna. Etiam eget nisl nec nisl placerat viverra.'
}

export default function Contac() {
  return (
    <>
      <PageHeader props={contactHeaderProps}/>
      <main className='max-w-5xl min-h-screen mx-auto p-4 flex flex-col'>

      </main>
    </>
  )
}
