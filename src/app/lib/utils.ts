import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'
// code from https://akhilaariyachandra.com/snippets/using-clsx-or-classnames-with-tailwind-merge
export function twClsxMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
