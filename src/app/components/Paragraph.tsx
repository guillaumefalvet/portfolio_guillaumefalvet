interface PropChildren {
  children: string;
}

export default function Paragraph({ children }: PropChildren) {
  return (
    <p className="text-md py-5 leading-8 mx-auto md:text-xl text-justify">
      {children}
    </p>
  );
}
