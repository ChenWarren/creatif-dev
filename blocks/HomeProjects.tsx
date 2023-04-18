import { Card } from "../components/Card"

export default function HomeProjects() {
  return (
    <section className="w-full flex flex-col">
      <div className="w-full h-[300px] bg-white">
        <h2 className="uppercase">
          HomeProjects
        </h2>
      </div>
      <div className="w-full h-[32rem] relative">
        <div className="w-full absolute -top-1 h-full flex sm:flex-row flex-col justify-center items-center bg-[#DFDFDF]">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </section>
  )
}
