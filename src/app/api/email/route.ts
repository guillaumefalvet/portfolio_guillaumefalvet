import { NextResponse, type NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import emailTemplate from './emailTemplate';
import { emailFormValidation } from '@lib/objectValidation';
export async function POST(request: NextRequest) {
  try {
    const data = emailFormValidation.parse(await request.json());
    const htmlTemplate = emailTemplate(data);
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });
    const mailOptions: Mail.Options = {
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.NODEMAILER_EMAIL,
      subject: data.subject,
      html: htmlTemplate,
    };
    await transport.sendMail(mailOptions);
    return NextResponse.json(
      { message: 'Success!', status: 200 },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      {
        message: error.message,
        status: 500,
      },
      { status: 500 }
    );
  }
}
