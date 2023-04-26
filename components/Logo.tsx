/**
 * Logo component with link to route '/'
 */

import logo from '../public/creatif-dev-logo-white.png'
import Link from 'next/link'
import Image from 'next/image';

export function Logo() {
  return (
  <Link href={'/'}>
    <Image src={logo} alt="Creatif logo" width={110} height={49} />
  </Link>)
}
  