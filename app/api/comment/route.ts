/**
 * Handle comment for blog post
 */
import { createClient } from "next-sanity"
import ClientConfig from "@/sanity/config/client"

export async function GET(request: Request, response: Response) {
  return new Response("Hello")
}

export async function POST(request: Request, response: Response) {
  const { name, comment, _id} = await request.json()
  
  const client = createClient(ClientConfig)
  try{
    await client.create({
      _type: "comment",
      name,
      commentText: comment,
      post: {
        _type: "reference",
        _ref: _id
      }
    })
    return new Response("Comment added",  { status: 200 })
  } catch (errer) {
    return new Response("Somthing went wrong", { status: 500 })
  }
}