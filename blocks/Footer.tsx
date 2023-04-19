import siteInfo from "@/settings/site-confit"
import { Logo, FooterMenu } from "@/components"
import { MenuItem } from "@/types/menuItem"

const usefullLinks: MenuItem[] = [
  {name: 'Link1', href: '#link1'},
  {name: 'Link2', href: '#link2'},
  {name: 'Link3', href: '#link3'},
]

export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-[#1B3A4D]">
      <section className="sm:h-[350px] text-white w-full max-w-4xl mx-auto p-4 grid sm:grid-cols-4 gap-8" >
        <div className="col-span-2 mt-10">
          <Logo/>
          <p className="pt-10 text-gray-400">
            It is a long established fact that a reader will be distracted by the
          </p>
        </div>
        <div className="col-span-1 mt-10 hidden sm:block">
          <FooterMenu title="Usefull Links" menuList={usefullLinks}/>
        </div>
        <div className="col-span-1 mt-10 hidden sm:block">
          <FooterMenu title="Usefull Links" menuList={usefullLinks}/>
        </div>
        <div className="col-span-1 mt-10">
          social media icons
        </div>
      </section>
      <div className="flex justify-center items-center bg-gray-900 text-white p-1">
        <p className="text-sm">{`@2023 ${siteInfo.title}, all rights reserved`}</p>
      </div>
    </footer>
  )
}


