import { siteInfo, socialMedia } from "@/settings"
import { Logo, FooterMenu, SocialMediaGroup } from "@/components"
import { MenuItem } from "@/types"

export default function Footer({linkListCenter, linkListRight}: {linkListCenter: MenuItem[], linkListRight: MenuItem[]}) {
  return (
    <footer className="w-full flex flex-col bg-[#1B3A4D]">
      <section className="sm:h-[350px] text-white w-full max-w-5xl mx-auto p-4 grid sm:grid-cols-4 gap-8" >
        <div className="col-span-2 mt-10 flex flex-col sm:items-start items-center">
          <Logo/>
          <p className="pt-10 text-gray-400 sm:text-start text-center">
            It is a long established fact that a reader will be distracted by the
          </p>
        <SocialMediaGroup props={socialMedia}/>
        </div>
        <div className="col-span-1 mt-10 hidden sm:block">
          {linkListCenter 
            && <FooterMenu title="Quick Links" menuList={linkListCenter}/>}
        </div>
        <div className="col-span-1 mt-10 hidden sm:block">
          {linkListRight 
            && <FooterMenu title="Usefull Links" menuList={linkListRight}/>}
        </div>

      </section>
      <div className="flex justify-center items-center bg-gray-900 text-white p-1">
        <p className="text-sm text-gray-500">{`@2023 ${siteInfo.title}, all rights reserved`}</p>
      </div>
    </footer>
  )
}


  