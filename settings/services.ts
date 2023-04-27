import { Service } from "@/types/service"
import { SiNextdotjs, SiShopify } from 'react-icons/si'
import { MdCloudUpload } from 'react-icons/md'

const services: Service[] = [
  {
    name: 'Web',
    description: 'Craft engaging websites with cutting-edge technology',
    icon: SiNextdotjs,
  },
  {
    name: 'E-commerce',
    description: 'Build robust online stores that drive revenue',
    icon: SiShopify,
  },
  {
    name: 'Support',
    description: 'Ensure websites run smoothly with reliable support services',
    icon: MdCloudUpload,
  },
]

export default services
