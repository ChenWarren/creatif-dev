/**
 * Social Media List
 * For SocialMedia Component
 */

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
    link: 'https://www.facebook.com/',
    iconName: 'BsFacebook',
    iconComponent: BsFacebook
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/',
    iconName: 'BsLinkedin',
    iconComponent: BsLinkedin
  },
  {
    name: 'github',
    link: 'https://github.com/',
    iconName: 'BsGithub',
    iconComponent: BsGithub
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/',
    iconName: 'BsTwitter',
    iconComponent: BsTwitter
  },
]

export default socialMedia