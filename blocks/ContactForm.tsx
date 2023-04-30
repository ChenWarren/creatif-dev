"use client"
import { useContactForm, sendEmail } from "@/lib"
import { useReCaptcha } from "next-recaptcha-v3"
import { useState } from "react"

function ContactForm() {
  const { values, handleChange, handleTextareaChange, clearValues } = useContactForm()
  const [responseMessage, setResponseMessage] = useState({ isSuccessful: false, message: ''})
  const { executeRecaptcha } = useReCaptcha()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      
      const token = await executeRecaptcha('submit')
      
      if(!token) {
        setResponseMessage({isSuccessful: false, message: 'Failed to send the email.'})
        return
      }
     
      values.token = token

      try {
        const res = await sendEmail(values)
        if (res.status === 200) {
          setResponseMessage({isSuccessful: true, message: 'Thank you for your message.'})
          // reset form and set value to ''
          clearValues()
        } else if (res.status === 401){
          setResponseMessage({isSuccessful: false, message: 'Invalid token. Please try again.'})
        } else {
          setResponseMessage({isSuccessful: false, message: 'Oops!Something went wrong. Please try again.'})
        }
      } catch (error) {
        setResponseMessage({isSuccessful: false, message: 'Something went wrong. Please try again'})
      }
    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      {responseMessage.message != '' 
        && 
        <p className="mb-4 text-[#FE7D75]">{responseMessage.message}</p> 
      }
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
      <button type="submit" value='Submit' className="w-52 uppercase bg-[#FE7D75] text-white my-2 px-8 py-2 rounded-full hover:brightness-110 active:bg-[#D7605F] active:opacity-70 active:ease-in-out">Send</button>
    </form>
  )
}

export default ContactForm