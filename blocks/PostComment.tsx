import { CommentForm } from "@/components"
import { Comment } from "@/types/comment";
import { getBlogComments } from "@/sanity/util/blog-controller"


function PostComment({comments}: {comments: Comment[]}) {
  console.log(comments)

  return (
    <>
      {comments &&
      <div>
        <h3 className="text-xl font-medium mb-4">PostComment</h3>
        <CommentForm/>
      </div>
      }
    </>
  )
}

export default PostComment