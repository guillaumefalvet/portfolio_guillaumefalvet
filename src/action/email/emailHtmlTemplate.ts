type emailType = {
  email: string
  message: string
}

export default function emailHtmlTemplate({ email, message }: emailType) {
  return `
  <div style="background-color: #f0f0f0; padding: 20px;">
    <h1 style="color: #333;">Nouveau message de contact</h1>
    <ul style="list-style-type: none; padding: 0;">
      <li style="margin-bottom: 10px;">
        <strong>Email :</strong> <p>${email}</p>
      </li>
      <li>
        <strong>Message :</strong> <p>${message}</p>
      </li>
    </ul>
  </div>
`
}
