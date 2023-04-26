/**
 * Difine image component for RichText in content
 */

import Image from "next/image"

export function RichTextImageComponent({value}: any) {
  const getImgName = value.asset._ref.split('-')
  const imgUrl = `https://cdn.sanity.io/images/iig2glgh/production/${getImgName[1]}-${getImgName[2]}.${getImgName[3]}`

  return(
    <div className="w-full flex justify-center my-4">
      <Image 
        src={imgUrl} 
        alt="" 
        width={700} 
        height={300}
        sizes='(max-width: 700px) 100%, 320px'
      />
    </div> 
  )
}

