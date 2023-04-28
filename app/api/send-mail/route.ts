import { Transporter, createTransport } from 'nodemailer'

interface EmailMessage {
  from: string
  to: string
  subject: string
  text: string
  html: string
}

export async function POST(request: Request, response: Response) {
  return new Response('Hello World!', { status: 200 })

  const body = await request.json()

  const message: EmailMessage = {
    from: body.email,
    to: process.env.GMAIL_EMAIL_ADDRESS || '',
    subject: body.subject,
    text: body.message,
    html: `<p>${body.message}</p>`
  }

  const transporter: Transporter<any> = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_PASSWORD,
    }
  })
  
  if( request.method === 'POST' ) {
    transporter.sendMail(message, (err: any, info: any) => {
      if (err) {
        return new Response(err.message, { status: 404 })
      } else {
        return new Response(info.accepted, { status: 200 })
      }
    })
  }
}
