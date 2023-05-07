import { MenuItem, MenuList } from "@/types";
import { Client } from "../config/client";
import { groq } from "next-sanity";

export async function getMenuList(): Promise<MenuList> {
  const res = await Client.fetch(
    groq `*[_type == "menuList"] {
      _id,
      name,
      "slug": slug.current,
      "menuItems": menuItems[]->slug,
    }`
  );
  return res;
} 

export async function getMenu(slug:string): Promise<MenuItem> {
  const res = await Client.fetch(
    groq `*[_type == "menuItem" && slug.current == $slug] {
      _id,
      name,
      link,
    }`,
    { slug }
  );
  return res
} 