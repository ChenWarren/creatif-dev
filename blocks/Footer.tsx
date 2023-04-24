import siteInfo from "@/settings/site-confit"
import { Logo, FooterMenu, SocialMediaGroup } from "@/components"
import { MenuItem } from "@/types/menuItem"
import { SocialMedia } from "@/types/socialMedia"

const usefullLinks: MenuItem[] = [
  {name: 'Link1', href: '#link1'},
  {name: 'Link2', href: '#link2'},
  {name: 'Link3', href: '#link3'},
]

const socialMedias: SocialMedia[] = [
  {
    name: 'facebook',
    link: '#',
    iconName: 'BsFacebook'
  },
  {
    name: 'linkedin',
    link: '#',
    iconName: 'BsLinkedin'
  },
  {
    name: 'github',
    link: '#',
    iconName: 'BsGithub'
  },
  {
    name: 'twitter',
    link: '#',
    iconName: 'BsTwitter'
  },
]


export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-[#1B3A4D]">
      <section className="sm:h-[350px] text-white w-full max-w-4xl mx-auto p-4 grid sm:grid-cols-4 gap-8" >
        <div className="col-span-2 mt-10 flex flex-col sm:items-start items-center">
          <Logo/>
          <p className="pt-10 text-gray-400 sm:text-start text-center">
            It is a long established fact that a reader will be distracted by the
          </p>
        <SocialMediaGroup props={socialMedias}/>
        </div>
        <div className="col-span-1 mt-10 hidden sm:block">
          <FooterMenu title="Usefull Links" menuList={usefullLinks}/>
        </div>
        <div className="col-span-1 mt-10 hidden sm:block">
          <FooterMenu title="Usefull Links" menuList={usefullLinks}/>
        </div>

      </section>
      <div className="flex justify-center items-center bg-gray-900 text-white p-1">
        <p className="text-sm text-gray-500">{`@2023 ${siteInfo.title}, all rights reserved`}</p>
      </div>
    </footer>
  )
}


  