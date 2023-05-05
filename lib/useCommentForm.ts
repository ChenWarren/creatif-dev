import { useState } from "react"

function useCommentForm() {
  const [values, setValues] = useState({
    name: '',
    comment: ''
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
      name: '',
      comment: ''
    })
  }

  return { values, handleChange, handleTextareaChange, clearValues}
}

export default useCommentForm