import { Button } from "./Button";

export default function Hero() {

  return (
    <>
      <section className="relative flex h-[600px] justify-center sm:flex-row px-6 items-center gap-8 brightness-50 bg-[url('/hero-background.png')] bg-cover">
      </section>
      <div className="bg-[#1B3A4D] w-full sm:h-[200px]">
        <div className="max-w-4xl mx-auto sm:px-4 h-full flex flex-col sm:flex-row justify-between items-center">
          <div className="w-[200px] h-[160px] p-5 text-white">
            <h3 className="text-lg">ESLOODK</h3>
            <div className="w-2/3 h-2 bg-[#156766]"></div>
            <p className="text-sm text-[#DFDFDF] mt-4">allows you to separate out your spending and set realistic limits</p>
          </div>
          <div className="w-[200px] h-[160px] p-5 text-white">
            <h3 className="text-lg">ESLOODK</h3>
            <div className="w-2/3 h-2 bg-[#156766]"></div>
            <p className="text-sm text-[#DFDFDF] mt-4">allows you to separate out your spending and set realistic limits</p>
          </div>
          <div className="w-[200px] h-[160px] p-5 text-white">
            <h3 className="text-lg">ESLOODK</h3>
            <div className="w-2/3 h-2 bg-[#156766]"></div>
            <p className="text-sm text-[#DFDFDF] mt-4">allows you to separate out your spending and set realistic limits</p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto sm:px-4">
        <div className="sm:w-[450px] w-full sm:h-[601px] absolute top-0 mt-20 opacity-60 bg-black">
        </div>
        <div className="sm:w-[450px] h-[400px] absolute top-[10rem] px-10 mt-20 text-white ">
          <h1 className="sm:text-[2.7rem] text-4xl mb-10">
            Innovate, Design, Transform 
          </h1>
          <p className="text-lg mb-10">
            Innovate, Design, Transform Discover the Power of Creatif.dev&apos;s Modern Web and App Solutions!
          </p>
          <Button title="Get Started"/>
        </div>
      </div>
    </>
  )
}


