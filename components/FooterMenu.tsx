import Link from "next/link"
import { MenuItem } from "@/types/menuItem";

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
      <ul className="pt-5 text-gray-400">
        {menuList && menuList.map((item, i) => (
          <Link href={item.href} key={i}>
            <li className="mb-2">{item.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
