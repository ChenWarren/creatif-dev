import axios from 'axios'

interface sentEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

async function sendEmail(props: sentEmailProps) {
  const { name, email, subject, message } = props
  console.log(props)

  const { data } = await axios.post('/api/send-mail', {
    name,
    email,
    subject,
    message,
  })

  return data
} 

export default sendEmail