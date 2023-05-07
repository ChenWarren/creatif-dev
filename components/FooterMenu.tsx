/**
 * Menu / Links in Footer section
 * Such as "Quick Links", "Useful Links"
 * Params:
 * title: The title for the links
 * menuList: An array with type of MenuItem
 */

import Link from "next/link"
import { MenuItem } from "@/types";

interface FooterMenuProps {
  title: string,
  menuList: MenuItem[]
}

const defaultMenuList: MenuItem[] = [
  { name: 'Item1', href: '#'},
  { name: 'Item3', href: '#'},
  { name: 'Item2', href: '#'},
]

export function FooterMenu({
  title = "Title", 
  menuList = defaultMenuList
}: FooterMenuProps) {
  return (
    <>
      <h3>{title}</h3>
      <div className="w-24 h-2 bg-[#156766]"></div>
      <ul className="pt-5">
        {menuList && menuList.map((item, i) => (
          <Link className="text-gray-400 hover:text-gray-200" href={item.href} key={i}>
            <li className="mb-2">{item.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
