interface InputProps {
  label: string
  type?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

export default function Input({ label, type, onChange, value }: InputProps) {
  return (
    <p>
      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-white">
        {label}
      </label>

      <input
        className="w-full rounded border py-2  leading-tight text-black"
        type={type || ''}
        value={value}
        required
        onChange={onChange}
      />
    </p>
  )
}
