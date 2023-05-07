import { ContactForm, PageHeader } from '@/blocks'
import { siteInfo } from '@/settings'
import { PageHeaderProps } from '@/types'

const contactHeaderProps: PageHeaderProps = {
  title: 'Contact',
  subtitle: 'Get in touch',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ipsum nibh. Ut velit urna. Etiam eget nisl nec nisl placerat viverra.'
}

export const metadata = {
  title: `${contactHeaderProps.title} | ${siteInfo.title}`,
  description: contactHeaderProps.description,
}

export default function Contac() {
  return (
    <>
      <PageHeader props={contactHeaderProps}/>
      <main className='max-w-5xl min-h-screen mx-auto p-4 flex flex-col'>
        <ContactForm/>
      </main>
    </>
  )
}
