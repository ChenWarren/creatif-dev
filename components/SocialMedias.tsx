/**
 * Social media group with icons and links
 * TO-DO:
 * Dynamically load icons
 */

import { 
  BsLinkedin, 
  BsGithub, 
  BsFacebook, 
  BsTwitter, 
} from 'react-icons/bs'
import Link from "next/link"
import { SocialMedia } from '@/types/socialMedia'

const defaultSocialMedias: SocialMedia[] = [
  {
    name: 'facebook',
    link: '#',
    iconName: 'BsFacebook',
    iconComponent: BsFacebook
  },
  {
    name: 'linkedin',
    link: '#',
    iconName: 'BsLinkedin',
    iconComponent: BsLinkedin
  },
  {
    name: 'github',
    link: '#',
    iconName: 'BsGithub',
    iconComponent: BsGithub
  },
  {
    name: 'twitter',
    link: '#',
    iconName: 'BsTwitter',
    iconComponent: BsTwitter
  },
]

export function SocialMediaGroup( {props}: {props: SocialMedia[]}) {
  const socialMedias =  props || defaultSocialMedias
  return (
    <div className="flex mt-10 gap-4 sm:justify-start justify-center">     
      {defaultSocialMedias.map(sm => (
        <Link key={sm.name} href={sm.link}>
          <sm.iconComponent size={25}/>
        </Link>
      ))}
    </div>
  )
}
  