import { useState } from 'react';
import Input from '@components/Input';
import { emailFormValidation } from '@lib/objectValidation';

type FormData = {
  email: string;
  lastName: string;
  firstName: string;
  subject: string;
  message: string;
};

const initialFormData: FormData = {
  email: '',
  lastName: '',
  firstName: '',
  subject: '',
  message: '',
};
export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  function handleChange(identifier: keyof FormData, value: string) {
    setFormData((previousData) => {
      return {
        ...previousData,
        [identifier]: value,
      };
    });
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const validatedData = emailFormValidation.parse(formData);
      await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(validatedData),
      });
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-10">
        <Input
          label="email"
          value={formData.email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChange('email', event.target.value)
          }
        />
        <Input
          label="Nom"
          value={formData.firstName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChange('firstName', event.target.value)
          }
        />
        <Input
          label="Prénom"
          value={formData.lastName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChange('lastName', event.target.value)
          }
        />
        <Input
          label="Sujet"
          value={formData.subject}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChange('subject', event.target.value)
          }
        />
        <div>
          <label>Message:</label>
          <textarea
            value={formData.message}
            onChange={(event) => handleChange('message', event.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
