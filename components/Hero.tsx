import { Button } from "./Button";

export default function Hero() {

  return (
    <>
      <section className="relative flex h-[700px] justify-center sm:flex-row px-6 items-center gap-8 mb-12 brightness-50 bg-[url('/hero-background.png')] bg-cover">
      </section>
      <div className="max-w-4xl mx-auto sm:px-4">
        <div className="sm:w-[450px] w-full h-[700px] absolute top-0 mt-20 opacity-60 bg-black">
        </div>
        <div className="sm:w-[450px] h-[400px] absolute top-[10rem] px-10 mt-20 text-white ">
          <h1 className="sm:text-[2.7rem] text-4xl mb-10">
            Innovate, Design, Transform 
          </h1>
          <p className="text-lg mb-10">
            Innovate, Design, Transform Discover the Power of Creatif.dev&apos;s Modern Web and App Solutions!
          </p>
          <Button title="Get Started" />
        </div>
      </div>
    </>
  )
}


