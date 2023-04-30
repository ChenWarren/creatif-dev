import { CommentForm } from "@/components"

function PostComment({postSlug}: {postSlug: string}) {
  return (
    <>
      <div>PostComment</div>
      <CommentForm/>
    </>
  )
}

export default PostComment