import { useState } from 'react'
import Input from './ui/Input'
import { emailFormValidation } from '@lib/objectValidation'
import Button from './ui/Button'

type FormData = {
  email: string
  lastName: string
  firstName: string
  subject: string
  message: string
}

const initialFormData: FormData = {
  email: '',
  lastName: '',
  firstName: '',
  subject: '',
  message: '',
}
export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData)

  function handleChange(identifier: keyof FormData, value: string) {
    setFormData((previousData) => {
      return {
        ...previousData,
        [identifier]: value,
      }
    })
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      const validatedData = emailFormValidation.parse(formData)
      await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(validatedData),
      })
    } catch (error: any) {
      console.log(error.message)
    }
  }

  return (
    <div className="xsm:w-screen md:w-2/4">
      <form onSubmit={handleSubmit} className="md:mx-8">
        <h3 className="text-accents py-2 text-center text-4xl font-medium">
          Contact
        </h3>
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          <Input
            label="email"
            type="email"
            value={formData.email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange('email', event.target.value)
            }
          />
          <Input
            label="Sujet"
            value={formData.subject}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange('subject', event.target.value)
            }
          />
        </div>
        <div>
          <label className="block">Message:</label>
          <textarea
            className="w-full text-black"
            rows={4}
            value={formData.message}
            onChange={(event) => handleChange('message', event.target.value)}
          ></textarea>
        </div>
        <Button>Envoyer</Button>
      </form>
    </div>
  )
}
