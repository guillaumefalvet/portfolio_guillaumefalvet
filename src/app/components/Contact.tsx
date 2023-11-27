import { Dispatch, SetStateAction, useState } from 'react'
import { twClsxMerge } from '@lib/utils'
import emailAction from '../action/email/emailAction'
import { sanitize } from 'isomorphic-dompurify'
import H3 from './ui/H3'
import { z } from 'zod'

export type FormDataType = {
  email: string
  subject: string
  message: string
}

const initialFormData = {
  email: '',
  subject: '',
  message: '',
}
const zodObject = {
  email: z.string().email(),
  subject: z.string().min(3).max(50),
  message: z.string().min(3).max(300),
}
const emailFormValidation = z.object(zodObject)

export default function Contact({
  setIsAHackerman,
}: {
  setIsAHackerman: Dispatch<SetStateAction<boolean>>
}) {
  const [formFieldData, setFormFieldData] =
    useState<FormDataType>(initialFormData)
  const [isError, setIsError] = useState<boolean>(false)
  const [messageBanner, setMessageBanner] = useState<string>('')
  const [isFormValid, setIsFormValid] = useState({
    email: { isValid: false, message: '' },
    subject: { isValid: false, message: '' },
    message: { isValid: false, message: '' },
  })
  //TODO make a state for each field, make it so that the submit button is disabled by default, if all three states are true then the button becomes usable
  //TODO add a character count for text field and a limit

  function handleChange(identifier: keyof FormDataType, value: string) {
    setFormFieldData((previousData) => {
      const updatedData = {
        ...previousData,
        [identifier]: value,
      }

      const fieldValidationSchema = zodObject[identifier]

      try {
        fieldValidationSchema.parse(updatedData[identifier])
        // Validation successful for this field
        setIsFormValid((prevData) => {
          return {
            ...prevData,
            [identifier]: { isValid: true, message: '' },
          }
        })
      } catch (error: any) {
        // Validation failed for this field
        setIsError(true)
        setIsFormValid((prevData) => {
          return {
            ...prevData,
            [identifier]: {
              isValid: false,
              message: error.errors?.[0]?.message || 'Validation error',
            },
          }
        })
      }
      return updatedData
    })
  }
  async function handleSubmitAction() {
    try {
      const { email, subject, message } = formFieldData
      /** SANITIZE THE BODY AGAINST XSS*/
      const sanitizedSubject = sanitize(subject)
      const sanitizedMessage = sanitize(message)
      if (sanitizedMessage.trim() === '' || sanitizedSubject.trim() === '') {
        setIsError(true)
        setMessageBanner('👾👾👾👾👾👾👾👾👾')
        setIsAHackerman(true)
        return
      }
      /* VALIDATE THE BODY */
      const validatedData = emailFormValidation.safeParse({
        email,
        subject: sanitizedSubject,
        message: sanitizedMessage,
      })
      if (!validatedData.success) {
        setIsError(true)
        setMessageBanner(
          `${validatedData.error.errors?.[0]?.path[0]} field: ${
            validatedData.error.errors?.[0]?.message || 'Validation error'
          }`
        )
        console.log(validatedData.error.errors)
        return
      }
      const { data } = validatedData
      await emailAction(data)
      setIsError(false)
      setMessageBanner('Message envoyé')
      setFormFieldData(initialFormData)
      return
    } catch (error: any) {
      setIsError(true)
      setMessageBanner('An error has occurred')
    }
  }
  let isFormReadyToSubmit = false
  if (
    isFormValid.email.isValid &&
    isFormValid.subject.isValid &&
    isFormValid.message.isValid
  ) {
    isFormReadyToSubmit = true
  }
  return (
    <div className="mb-8 flex justify-center">
      <form action={handleSubmitAction}>
        <H3>Contactez-moi</H3>

        <div className={twClsxMerge('mb-6', 'md:grid md:grid-cols-2 md:gap-6')}>
          <p>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-white">
              email
            </label>

            <input
              className={twClsxMerge(
                'bg-darkShade mb-2 rounded border border-stone-500 p-2 leading-tight text-white',
                isFormValid.email.message.length > 0 && 'border border-red-900'
              )}
              type="email"
              value={formFieldData.email}
              required
              onChange={(event) => handleChange('email', event.target.value)}
            />
            <span className="block h-4 text-xs italic text-red-400">
              {isFormValid.email.message.length > 0 &&
                isFormValid.email.message}
            </span>
          </p>
          <p>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-white">
              Sujet
            </label>

            <input
              className={twClsxMerge(
                'bg-darkShade mb-2 rounded border border-stone-500 p-2 leading-tight text-white',
                isFormValid.subject.message.length > 0 &&
                  'border border-red-900'
              )}
              value={formFieldData.subject}
              required
              onChange={(event) => handleChange('subject', event.target.value)}
            />
            <span className="block h-4 text-xs italic text-red-400">
              {isFormValid.subject.message.length > 0 &&
                isFormValid.subject.message}
            </span>
          </p>
        </div>

        <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-white">
          Message:
        </label>
        <textarea
          className={twClsxMerge(
            'bg-darkShade mb-2 block w-full rounded border border-stone-500 p-2 text-white',
            isFormValid.message.message.length > 0 && 'border border-red-900'
          )}
          rows={6}
          value={formFieldData.message}
          onChange={(event) => handleChange('message', event.target.value)}
        ></textarea>
        <span className="block h-4 text-xs italic text-red-400">
          {isFormValid.message.message.length > 0 &&
            isFormValid.message.message}
        </span>
        {/* <Button>Envoyer</Button> */}
        <div className="flex justify-center">
          <button
            disabled={!isFormReadyToSubmit}
            className={twClsxMerge(
              'mb-2 me-2 mt-4 w-fit items-center rounded-lg px-5 py-2.5 text-center text-lg font-medium text-black',
              // hover style
              isFormReadyToSubmit
                ? 'bg-white hover:bg-mainColor hover:text-white'
                : 'bg-gray-400'
            )}
          >
            Envoyer
          </button>
        </div>
        <span className="mb-2 block h-6 text-center text-xs italic">
          {isError ? (
            <p className="text-xs text-red-400">{messageBanner}</p>
          ) : (
            <p className="text-lg text-green-400">{messageBanner}</p>
          )}
        </span>
      </form>
    </div>
  )
}
