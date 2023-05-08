import { MenuItem, MenuList } from "@/types";
import { Client } from "../config/client";
import { groq } from "next-sanity";

export async function getMenuList(slug: string): Promise<MenuList> {
  const res = await Client.fetch(
    groq `*[_type == "menuList" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      "menuItems": menuItems[]-> {
        _id,
        name,
        link,
      },
    }`,
    { slug }
  );
  return res;
} 
