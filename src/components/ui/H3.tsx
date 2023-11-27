type H3Props = {
  children: string
} & React.HTMLProps<HTMLHeadingElement>
export default function H3({ children, ...props }: H3Props) {
  return (
    <h3
      {...props}
      className="py-6 text-center text-4xl font-medium text-mainColor"
    >
      {children}
    </h3>
  )
}
