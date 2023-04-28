import { useState } from "react"

function useContactForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
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

  return { values, handleChange, handleTextareaChange}
}

export default useContactForm