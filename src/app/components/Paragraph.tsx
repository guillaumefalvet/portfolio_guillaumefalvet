type ParagraphProps = {
  children: string;
  title: string;
};

export default function Paragraph({ children, title }: ParagraphProps) {
  return (
    <div className="p-10">
      <h3 className="text-4xl py-2 text-center font-medium">{title}</h3>
      <p className="text-md py-5 leading-8 mx-auto md:text-xl text-justify">
        {children}
      </p>
    </div>
  );
}
