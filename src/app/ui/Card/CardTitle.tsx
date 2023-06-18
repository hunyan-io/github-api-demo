interface CardTitleProps {
  /**
   * The HTML element to render the title as.
   * @default "h1"
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
}

export default function CardTitle({ children, as = "h1" }: CardTitleProps) {
  const Component = as;

  return (
    <Component className="text-lg text-slate-200 font-medium mb-2">
      {children}
    </Component>
  );
}
