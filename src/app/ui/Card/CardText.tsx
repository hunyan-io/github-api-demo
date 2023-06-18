interface CardTextProps {
  dangerouslySetInnerHTML?: {
    __html: string;
  };
  children?: React.ReactNode;
}

export default function CardText({
  children,
  dangerouslySetInnerHTML,
}: CardTextProps) {
  return (
    <p
      className="text-sm text-slate-500"
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </p>
  );
}
