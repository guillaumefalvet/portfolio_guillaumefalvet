'use server'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import emailHtmlTemplate from './emailHtmlTemplate'
import { FormDataType } from '@components/Contact'

export default async function emailAction(
  formData: FormDataType
): Promise<boolean | string> {
  try {
    const { email, subject, message } = formData
    const htmlTemplate = emailHtmlTemplate({
      email,
      message,
    })
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    })
    const mailOptions: Mail.Options = {
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.NODEMAILER_EMAIL,
      subject,
      html: htmlTemplate,
    }
    await transport.sendMail(mailOptions)
    return true
  } catch (error: any) {
    return error.message
  }
}
