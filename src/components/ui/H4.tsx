type H4Props = {
  children: string
}
export default function H4({ children }: H4Props) {
  return <h4 className="my-3 text-center text-xl font-bold">{children}</h4>
}
