import axios, { AxiosRequestConfig } from 'axios'

interface sendData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: Request, response: Response) {
  const body = await request.json()
  const token = body.token

  const res = await verifyRecaptcha(token)
  if(!res.data.success) {
    const response = new Response("Invalid recaptcha", {status: 401})
    return response
  }
  
  const data: sendData = {
    name: body.name,
    email: body.email,
    subject: body.subject,
    message: body.message
  }

  const config: AxiosRequestConfig<sendData> = {
    method: 'post',
    url: process.env.MAILER_URL,
    data,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.SENT_MAIL_TOKEN
    }
  } 

  try {
    const result = await axios(config)
  
    if(result.status === 200) {
      const response = new Response("Message sent", {status: 200})
      return response
    } else {
      const response = new Response("Message not sent", {status: 500})
      return response
    }
  } catch (error) {
    const response = new Response("Message not sent", {status: 500})
    return response
  }
}


const verifyRecaptcha = async (token: string) => {
  const secretKey =  process.env.RECAPTCHA_SECRET_KEY

  var verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`

  return await axios.post(verificationUrl)
}

//https://vercel.com/guides/sending-emails-from-an-application-on-vercel