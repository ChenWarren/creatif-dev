import siteInfo from "@/settings/site-confit"

export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-[#1B3A4D]">
      <section className="h-[350px] text-white max-w-4xl mx-auto p-4 grid sm:grid-cols-3 gap-4" >
        <div className="col-span-1">1</div>
        <div className="col-span-1">2</div>
        <div className="col-span-1">3</div>
      </section>
      <div className="flex justify-center items-center bg-gray-900 text-white p-1">
        <p className="text-sm">{`@2023 ${siteInfo.title}, all rights reserved`}</p>
      </div>
    </footer>
  )
}
