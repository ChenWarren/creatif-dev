"use client"
import Link from "next/link";
import menuList from "@/settings/menu-list";
import { MenuItem } from "@/types/menuItem";
import { Logo } from "@/components";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";


export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-10 bg-[#5DD9BF] text-white">
      <section className="max-w-5xl mx-auto p-4 flex justify-between items-center">
        <Logo />
        <div>
          {/* Mobile menu start */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl sm:hidden focus:outline-none">
            {menuOpen ? <IoClose/> : <IoMenu/>}
          </button>
          {menuOpen ? 
            <div className="absolute top-20 right-0 ring-1 px-4 shadow-md ring-slate-200 max-w-sm bg-[#5DD9BF] z-20">
              <DropdownMenu menuList={menuList} closeMenu={closeMenu}/>
            </div>
            :
            null
          }
          {/* Mobile menu end  */}
          <nav className="hidden sm:block space-x-8 text-base" aria-label="main">
            {menuList.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:opacity-80"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </header>
  )
}

// Dropdown menu
export function DropdownMenu({ 
  menuList,
  closeMenu,
}: {menuList: MenuItem[], closeMenu?: ()=>void}) {
  return (
    <div className="w-40 p-4 z-20 flex flex-col">
      {menuList.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-lg mb-4"
          onClick={closeMenu}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}