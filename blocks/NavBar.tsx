import Link from "next/link";
import menuList from "@/settings/menu-list";
import { Logo } from "@/components";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-10 bg-[#1B3A4D] text-white">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <Logo />
        <div>
          <button className="text-3xl sm:hidden focus:outline-none">
            &#9776;
          </button>
          <nav className="hidden sm:block space-x-8 text-base" aria-label="main">
            {menuList.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="hover:opacity-80"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </header>
  )
}
