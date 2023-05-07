import Link from 'next/link'

interface LinkButtonProps {
  linkUrl: string,
  linkText: string,
  openNewTab?: boolean
}

export function LinkButton({ 
  linkUrl, 
  linkText,
  openNewTab=false, 
}: LinkButtonProps) {
  return (
    <Link 
      href={linkUrl}
      target={openNewTab ? '_blank' : '_self'} 
      className="w-fit uppercase bg-[#FE7D75] text-white my-2 px-8 py-2 rounded-full hover:brightness-110 active:bg-[#D7605F] active:opacity-70 active:ease-in-out"
    >
      {linkText}
    </Link>
  )
}