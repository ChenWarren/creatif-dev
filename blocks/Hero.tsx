import { TextCard, LinkButton } from "@/components"
import { services } from "@/settings"

export default function Hero() {

  return (
    <>
      <section className="flex flex-col h-full justify-end items-center bg-[#5DD9BF]">
        <div className="sm:max-w-5xl sm:h-[500px] w-full mx-auto px-4 pt-20">
          <div className="w-full md:px-10 text-white flex flex-col items-center mb-10">
            <h1 className="sm:text-5xl uppercase text-3xl text-center mb-10">
              Frontend, Backend, Web 
            </h1>
            <p className="max-w-[500px] sm:text-lg mb-10 text-gray-100 text-center">
              Discover the Passion of Creatif.dev&apos;s Latest Web and App Solutions!
            </p>
            <LinkButton linkUrl="/contact" linkText="Get Started"/>
          </div>
        </div>
        <div className="sm:max-w-5xl sm:h-[400px] w-full h-52 sm:rounded-t-3xl bg-[url('/hero-main.png')] bg-cover bg-no-repeat"></div>
      </section>

      <div className="bg-[#1B3A4D] w-full sm:h-[300px]">
        <div className="max-w-5xl mx-auto sm:px-4 h-full flex flex-col sm:flex-row justify-between items-center">
          {services && services.map((service, index) => (
            <TextCard key={index} props={service}/>
          ))}
        </div>
      </div>
    </>
  )
}




  