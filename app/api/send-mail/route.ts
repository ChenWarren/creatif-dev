import axios from 'axios'
import { Transporter, createTransport } from 'nodemailer'

interface EmailMessage {
  from: string
  to: string
  subject: string
  text: string
  html: string
}

export async function POST(request: Request, response: Response) {
  const body = await request.json()
  const token = body.token

  const res = await verifyRecaptcha(token)
  if(!res.data.success) {
    return new Response("Invalid recaptcha", {status: 401})
  }
  
  const message: EmailMessage = {
    from: body.email,
    to: process.env.EMAIL_ADDRESS || 'creatif.dev@gmail.com',
    subject: body.subject,
    text: `Sent from: ${body.email} \n\n Message: ${body.message} \n\n`,
    html: `<p>Sent from: ${body.email} </p> <p> Message: ${body.message}</p>`
  }

  const transporter: Transporter<any> = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    }
  })

  transporter.sendMail(message, (err, info) => {
    if(err) {
      return new Response("Error sending message", {status: 501})
    } 
  })

  return new Response("Message sent", {status: 200})
}


const verifyRecaptcha = async (token: string) => {
  const secretKey =  process.env.RECAPTCHA_SECRET_KEY

  var verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`

  return await axios.post(verificationUrl)
}