import axios from 'axios'

interface sentEmailProps {
  name: string;
  email: string;
  message: string;
}

async function sentEmail(props: sentEmailProps) {
  const { name, email, message } = props
  const { data } = await axios({
    method: 'POST',
    url: 'api/send-mail',
    data: {
      name: name,
      email: email,
      message: message
    }
  })
  
  return data
} 



export default sentEmail