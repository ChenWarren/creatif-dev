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

export function SocialMediaGroup( {props}: {props: SocialMedia[]}) {
  const socialMedias =  props || defaultSocialMedias
  return (
    <div className="flex mt-10 gap-4 opacity-60">
      <Link href={(socialMedias.find(sm => sm.name === 'linkedin'))?.link || '#'}>
        <BsLinkedin size={25}/>
      </Link>
      <Link href={(socialMedias.find(sm => sm.name === 'github'))?.link || '#'}>
        <BsGithub size={25}/>
      </Link>
      <Link href={(socialMedias.find(sm => sm.name === 'twitter'))?.link || '#'}>
        <BsTwitter size={25}/>
      </Link>
      <Link href={(socialMedias.find(sm => sm.name === 'facebook'))?.link || '#'}>
        <BsFacebook size={25}/>
      </Link>
    </div>
  )
}
  