import { PageHeaderProps } from "@/types/pageHeaderProps";

const pageHeaderProps: PageHeaderProps = {
  title: 'Title',
  subtitle: 'Subtitle',
  description: 'Description'
}

function PageHeader({props=pageHeaderProps}: {props:PageHeaderProps}) {
  return (
    <>
      <section className="flex flex-col sm:h-52 h-40 justify-center items-center bg-[#5DD9BF]">
        <h1 className="w-full sm:text-5xl text-4xl text-center text-white">{props.title.toUpperCase()}</h1>
      </section>
      <div className="sm:max-w-5xl w-full mx-auto px-4 sm:pt-20 pt-5">
        <h2 className="sm:text-4xl text-2xl mb-4">{props.subtitle}</h2>
        <p className="text-lg sm:w-2/3 w-full mb-4">{props.description}</p>
      </div>
    </>
  )
}

export default PageHeader