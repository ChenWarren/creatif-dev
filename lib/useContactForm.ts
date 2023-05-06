//TODO: Make a resuable form component or class?


import { useState } from "react"

function useContactForm() {
  const [values, setValues] = useState({
    token: '',
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues(prevState => {
      return {
        ...prevState,
        [event.target.id]: event.target.value
      }
    })
  }

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues(prevState => {
      return {
        ...prevState,
        [event.target.id]: event.target.value
      }
    })
  }

  // Function to clear values
  const clearValues = () => {
    setValues({
      token: '',
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return { values, handleChange, handleTextareaChange, clearValues}
}

export default useContactForm