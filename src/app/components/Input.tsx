interface InputProps {
  label: string;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function Input({ label, type, onChange, value }: InputProps) {
  let inputClasses = 'w-full px-3 py-2 leading-tight border rounded shadow';
  let labelClasses = 'block mb-2 text-xs font-bold tracking-wide uppercase';
  return (
    <div>
      <label className={labelClasses}>{label}</label>
      <input
        className={inputClasses}
        type={type || ''}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
