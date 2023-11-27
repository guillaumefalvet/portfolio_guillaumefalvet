import { Dispatch, SetStateAction, useState } from 'react'
import { twClsxMerge } from '@lib/utils'
import emailAction from '@action/email/emailAction'
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

// UI COMPONENT
function ErrorSpan({ data }: { data: { message: string; isValid: boolean } }) {
  return (
    <span className="block h-4 text-xs italic text-red-400">
      {data.message.length > 0 && <p>{data.message}</p>}
    </span>
  )
}

function Label({ children }: { children: string }) {
  return (
    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-white">
      {children}
    </label>
  )
}

export default function Contact({
  setIsAHackerman,
}: {
  setIsAHackerman: Dispatch<SetStateAction<boolean>>
}) {
  const [formFieldData, setFormFieldData] =
    useState<FormDataType>(initialFormData)
  const [isError, setIsError] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [messageBanner, setMessageBanner] = useState<string>('')
  const [isFormValid, setIsFormValid] = useState({
    email: { isValid: false, message: '' },
    subject: { isValid: false, message: '' },
    message: { isValid: false, message: '' },
  })

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
    if (isSubmitting) {
      setIsError(true)
      setMessageBanner('Une erreur est survenue, veuillez actualiser la page')
      return
    }
    try {
      setIsSubmitting(true)
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
    setIsSubmitting(false)
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
        <div
          className={twClsxMerge(
            'mb-6 xsm:w-[350px] md:w-full',
            'md:grid md:grid-cols-2 md:gap-6'
          )}
        >
          <div>
            <Label>email</Label>
            <input
              className={twClsxMerge(
                'mb-2 rounded border border-stone-500 bg-darkShade p-2 leading-tight text-white xsm:w-full',
                isFormValid.email.message.length > 0 && 'border border-red-900'
              )}
              type="email"
              value={formFieldData.email}
              required
              onChange={(event) => handleChange('email', event.target.value)}
            />
            <ErrorSpan data={isFormValid.email} />
          </div>

          <div>
            <Label>sujet</Label>
            <input
              className={twClsxMerge(
                'mb-2 rounded border border-stone-500 bg-darkShade p-2 leading-tight text-white xsm:w-full',
                isFormValid.subject.message.length > 0 &&
                  'border border-red-900'
              )}
              value={formFieldData.subject}
              required
              onChange={(event) => handleChange('subject', event.target.value)}
            />
            <ErrorSpan data={isFormValid.subject} />
          </div>
        </div>

        <Label>message</Label>
        <textarea
          className={twClsxMerge(
            'mb-2 block w-full rounded border border-stone-500 bg-darkShade p-2 text-white',
            isFormValid.message.message.length > 0 && 'border border-red-900'
          )}
          rows={8}
          value={formFieldData.message}
          onChange={(event) => handleChange('message', event.target.value)}
        ></textarea>
        <span className=" flex justify-between text-xs">
          <ErrorSpan data={isFormValid.message} />
          {formFieldData.message.length < 300 ? (
            <p>{formFieldData.message.length}/300</p>
          ) : (
            <p className="text-red-400">300/300</p>
          )}
        </span>

        {/* BUTTON */}
        <div className="flex justify-center">
          <button
            disabled={!isFormReadyToSubmit}
            className={twClsxMerge(
              'mb-2 me-2 mt-4 w-fit items-center rounded-lg px-5 py-2.5 text-center text-lg font-medium text-black',
              // hover style
              isFormReadyToSubmit
                ? // Button is enabled
                  'bg-white hover:bg-mainColor hover:text-white'
                : // Button is disabled
                  'bg-gray-400'
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
