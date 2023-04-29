"use client"
import { useContactForm, sendEmail } from "@/lib"
import { useState } from "react"

function ContactForm() {
  const { values, handleChange, handleTextareaChange } = useContactForm()
  const [responseMessage, setResponseMessage] = useState({ isSuccessful: false, message: ''})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    try {
      const res = await sendEmail(values)
      if (res.status === 200) {
        setResponseMessage({isSuccessful: true, message: 'Thank you for your message.'})
      }
    } catch (error) {
      console.log(error)
      setResponseMessage({isSuccessful: false, message: 'Something went wrong. Please try again'})
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      {responseMessage.message != '' &&  <p>{responseMessage.message}</p> }
      <label className="mb-4 font-medium" htmlFor="name">Your Name <span className="text-red-500">*</span></label>
      <input 
        required
        type="text" 
        id='name'
        value={values.name}
        onChange={handleChange}
        className="p-4 mb-6 outline-none border-b-2 focus:border-[#49CEB2] focus:border-b-2"
      />

      <label className="my-4 font-medium" htmlFor="email">Your Email <span className="text-red-500">*</span></label>
      <input 
        required
        type="email" 
        id='email'
        value={values.email}
        onChange={handleChange}
        className="p-4 mb-6 outline-none border-b-2 focus:border-[#49CEB2] focus:border-b-2"
      />

      <label className="mb-4 font-medium" htmlFor="subject">Subject <span className="text-red-500">*</span></label>
      <input 
        required
        type="text" 
        id='subject'
        value={values.subject}
        onChange={handleChange}
        className="p-4 mb-6 outline-none border-b-2 focus:border-[#49CEB2] focus:border-b-2"
      />

      <label className="my-4 font-medium" htmlFor="message">Your message <span className="text-red-500">*</span></label>
      <textarea 
        required
        id='message'
        value={values.message}
        onChange={handleTextareaChange}
        className="mb-6 p-4 outline-none border-b-2 focus:border-[#49CEB2] focus:border-b-2"
        rows={5}
      />
      <button type="submit" value='Submit' className="max-w-sx uppercase bg-[#FE7D75] text-white my-2 px-8 py-2 rounded-full hover:bg-[#D7605F] active:bg-[#D7605F] active:opacity-70 active:ease-in-out">Send</button>
    </form>
  )
}

export default ContactForm