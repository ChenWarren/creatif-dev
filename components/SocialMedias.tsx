import { 
  BsLinkedin, 
  BsGithub, 
  BsFacebook, 
  BsTwitter, 
  BsInstagram 
} from 'react-icons/bs'
import Link from "next/link"
import { IconType } from 'react-icons'

interface SocialMediaGroupProps {
  name: string
  link: string, 
  iconName: string
}

const defaultSocialMedias: SocialMediaGroupProps[] = [
  {
    name: 'FackBook',
    link: '#',
    iconName: 'BsFacebook'
  },
  {
    name: 'LinkedIn',
    link: '#',
    iconName: 'BsLinkedin'
  },
  {
    name: 'Github',
    link: '#',
    iconName: 'BsGithub'
  },
] 

function iconGenerator(name: string): any {
  return <BsFacebook/>
}

export function SocialMediaGroup( props: SocialMediaGroupProps[]) {
  const socialMedias = props || defaultSocialMedias
  return (
    <div className="flex mt-10 gap-2 opacity-60">
      { socialMedias.map((item,i) => (
        <div key={i}>
          {iconGenerator(item.name)}
        </div>
      ))}

    </div>
  )
}
  