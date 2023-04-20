import { Button } from "../components/Button"

export default function Hero() {

  return (
    <>
      <section className="flex flex-col h-full justify-end items-center bg-[#5DD9BF]">
        <div className="sm:max-w-4xl w-full mx-auto px-4 pt-20">
          <div className="w-full md:px-10 text-white flex flex-col items-center mb-10">
            <h1 className="sm:text-5xl uppercase text-3xl mb-10">
              Innovate, Design, Transform 
            </h1>
            <p className="sm:text-lg mb-10 text-gray-100">
              Innovate, Design, Transform Discover the Power of Creatif.dev&apos;s Modern Web and App Solutions!
            </p>
            <Button title="Get Started"/>
          </div>
        </div>
        <div className="sm:max-w-[800px] sm:h-[350px] w-full h-40 rounded-t-3xl bg-[url('/hero-main.png')] bg-cover bg-no-repeat"></div>
      </section>

      <div className="bg-[#1B3A4D] w-full sm:h-[200px]">
        <div className="max-w-4xl mx-auto sm:px-4 h-full flex flex-col sm:flex-row justify-between items-center">
          <div className="w-[200px] h-[160px] p-5 text-white">
            <h3 className="text-lg">ESLOODK</h3>
            <div className="w-2/3 h-2 bg-[#156766]"></div>
            <p className="text-sm text-gray-400 mt-4">allows you to separate out your spending and set realistic limits</p>
          </div>
          <div className="w-[200px] h-[160px] p-5 text-white">
            <h3 className="text-lg">ESLOODK</h3>
            <div className="w-2/3 h-2 bg-[#156766]"></div>
            <p className="text-sm text-gray-400 mt-4">allows you to separate out your spending and set realistic limits</p>
          </div>
          <div className="w-[200px] h-[160px] p-5 text-white">
            <h3 className="text-lg">ESLOODK</h3>
            <div className="w-2/3 h-2 bg-[#156766]"></div>
            <p className="text-sm text-gray-400 mt-4">allows you to separate out your spending and set realistic limits</p>
          </div>
        </div>
      </div>
    </>
  )
}


