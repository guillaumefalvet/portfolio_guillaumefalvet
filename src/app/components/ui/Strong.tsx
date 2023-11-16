type StrongProps = {
  children: string
}

export default function Strong({ children }: StrongProps) {
  return <strong className=" text-light">{children}</strong>
}
