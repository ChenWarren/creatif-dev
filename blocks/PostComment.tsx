'use client'
import { CommentForm, AvatarWidget, SubmitButton } from "@/components"
import { Comment } from "@/types/comment";
import { useCommentForm } from "@/lib";
import React, { useState } from "react";
import { revalidatePath } from "next/cache";


function PostComment({_id, slug, comments}: {_id: string, slug: string, comments: Comment[]}) {

  const { values, handleChange, handleTextareaChange, clearValues } = useCommentForm()
  const [responseMessage, setResponseMessage] = useState({ isSuccessful: false, message: ''})

  async function handleSubmit(){
    try {
      const res = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({...values, _id}),
      })
      if (res.status === 200) {
        // reset form and set value to ''
        clearValues()
        revalidatePath(`/blog/${slug}`)
      } else {
        setResponseMessage({isSuccessful: false, message: 'Something went wrong. Please try again'})
      }
    } catch  (error) {
      setResponseMessage({isSuccessful: false, message: 'Something went wrong. Please try again'})
    }
  }

  return (
    <>
      <div>
        <h3 className="text-xl font-medium mb-4">Comments</h3>
        { comments && comments.map((comment) => (
          <div key={comment._id} className="mb-10">
            <AvatarWidget props={{image: '', name: comment.name, description: new Date(comment._updatedAt).toDateString()}}/>
            <p className="pl-14">{comment.text}</p>
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex flex-col sm:ml-14 max-w-xl">
          {responseMessage.message != '' 
          && <p className="mb-4 text-[#FE7D75]">{responseMessage.message}</p>}
          <label className="my-4 font-medium" htmlFor="comment">Your comment <span className="text-red-500">*</span></label>
          <textarea 
            required
            id='comment'
            value={values.comment}
            onChange={handleTextareaChange}
            className="mb-6 p-4 outline-none border-b-2 focus:border-[#49CEB2] focus:border-b-2"
            rows={5}
          />
          <label className="mb-4 font-medium" htmlFor="name">Your Name <span className="text-red-500">*</span></label>
          <input 
            required
            type="text" 
            id='name'
            value={values.name}
            onChange={handleChange}
            className="p-4 mb-6 outline-none border-b-2 focus:border-[#49CEB2] focus:border-b-2"
          />
          <SubmitButton text="Submit"/>
        </form>
      </div>
    </>
  )
}

export default PostComment