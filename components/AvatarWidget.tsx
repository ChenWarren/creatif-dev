import Image from "next/image"
import LogoIcon from "@/public/logo-icon-gray.png"

interface AvatarProps {
  image: string;
  name: string;
  description: string;
}

export function AvatarWidget({props}: {props: AvatarProps}) {
  return (<div className="flex items-center my-4">
    <Image src={props.image || LogoIcon} alt={props.name} width={50} height={50} className="rounded-full mr-2" />
    <div className="flex flex-col">
      <h3 className="font-medium">{props.name}</h3>
      <p className="text-gray-500 text-sm">{props.description}</p>
    </div>
  </div>);
}