interface CardFooterProps {
  children?: React.ReactNode;
}

export default function CardFooter({ children }: CardFooterProps) {
  return (
    <div className="flex items-center mt-4 text-sm text-gray-500 gap-4">
      {children}
    </div>
  );
}
