const sendgrid = require('@sendgrid/mail')
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

let mail = (req, res) => {
  const body = JSON.parse(req.body)
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}\r\n
  `

  const data = {
    to: 'josue.martell17@gmail.com',
    from: 'josue.martell17@gmail.com',
    subject: 'Profolio mail',
    text: message,
    html: message.replace(/\r\n/g, '<br/>'),
  }

  mail.send(data)
  res.status(200).json({ status: 'OK' })
}

export default mail
