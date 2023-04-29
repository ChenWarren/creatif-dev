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

  const handleToken = (token: string) => {
    setValues(prevState => {
      return {
        ...prevState,
        token: token
      }
    })
  
  }

  return { values, handleChange, handleTextareaChange,  handleToken}
}

export default useContactForm