import Image from "next/image"

export function RichTextImageComponent({value}: any) {
  const getImgName = value.asset._ref.split('-')
  const imgUrl = `https://cdn.sanity.io/images/iig2glgh/production/${getImgName[1]}-${getImgName[2]}.${getImgName[3]}`

  return( 
    <Image src={imgUrl} alt="" width={500} height={300}/>
  )
}

