const nodemailer = require('nodemailer')
require('dotenv').config()
const path = require('path')




const sendEmail = async ( email , conetnt ) => {
  const transporter = nodemailer.createTransport( {
    service: 'gmail',
    auth: {
      user:process.env.ADMIN_NAME,
      pass:process.env.PASSWORD
    }
  })

  const info = await transporter.sendMail({
    from:"message sending from  aliev davlatbek",
    to:email,
    subject:"compliments",
    text:conetnt,
    html:`
    <h1>nima gap e</h1>
    <a href="https://youtube.com" target="_blank" > link bu </a>
    <button type="submit"> send</button>
    `,
    attachments : [
      {
        path : path.join(process.cwd(),'durdona.jpg'),
        filename : 'xotinim'
      }
    ]
  })

  console.log('messageid' , info.messageId);
}

module.exports = sendEmail