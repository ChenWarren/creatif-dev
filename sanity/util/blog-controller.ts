import { Blog, Comment } from "@/types"
import {ClientConfig} from "../config/client"
import { createClient, groq } from "next-sanity"


export async function getBlogs(): Promise<Blog[]> {
  return await createClient(ClientConfig).fetch(
    groq `*[_type == "blog" ] {
      _id,
      _updatedAt,
      title,
      featured,
      publishedAt,
      author->{
        name,
        "profile_image": profile_image.asset->url,
        bio
      },
      "slug": slug.current,
      "image": image.asset->url,
      url,
      excerpt,
    }`
  )
}

export async function getBlog(slug: string): Promise<Blog> {
  return await createClient(ClientConfig).fetch(
    groq `*[_type == "blog" && slug.current == $slug ][0] {
      _id,
      _updatedAt,
      title,
      featured,
      publishedAt,
      author->{
        name,
        "profile_image": profile_image.asset->url,
        bio
      },
      "slug": slug.current,
      "image": image.asset->url,
      url,
      excerpt,
      content,
      "comments": *[_type == "comment" && references(^._id)]
    }`,
    {slug}
  )
}

export async function getCommentsByPostId(postId: string): Promise<Comment[]> {
  return await createClient(ClientConfig).fetch(
    groq `*[_type == "comment" && post._ref == $postId] {
      _id,
      _updatedAt,
      name,
      commentText, 
    }`,
    {postId}
  )
}
