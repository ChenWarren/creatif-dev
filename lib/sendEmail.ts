import axios from 'axios'

interface sentEmailProps {
  token: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

async function sendEmail(props: sentEmailProps) {
  return await axios({
    method: 'POST',
    url: '/api/send-mail',
    data: props
  })
} 

export default sendEmail