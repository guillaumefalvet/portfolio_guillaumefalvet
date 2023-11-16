type H3Props = {
  children: string
}
export default function H3({ children }: H3Props) {
  return <h3 className="my-3 text-center text-xl font-bold">{children}</h3>
}
