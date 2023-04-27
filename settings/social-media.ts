import { SocialMedia } from "@/types/socialMedia"
import { 
  BsLinkedin, 
  BsGithub, 
  BsFacebook, 
  BsTwitter, 
} from 'react-icons/bs'

const socialMedia: SocialMedia[] = [
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

export default socialMedia