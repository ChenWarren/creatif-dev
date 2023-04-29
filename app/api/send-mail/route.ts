import { Transporter, createTransport } from 'nodemailer'

interface EmailMessage {
  from: string
  to: string
  subject: string
  text: string
  html: string
}

export async function GET(request: Request) {
  return new Response('Hello World')
}

export async function POST(request: Request, response: Response) {
  const body = await request.json()
  
  const message: EmailMessage = {
    from: body.email,
    to: process.env.EMAIL_ADDRESS || '',
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
      return new Response("Error sending message")
    } 
  })

  return new Response("Message sent")
}

