import classNames from "classnames";

const variants = {
  indigo: "bg-indigo-900 text-indigo-300",
  yellow: "bg-yellow-900 text-yellow-300",
  pink: "bg-pink-900 text-pink-300",
};

interface BadgeProps {
  /**
   * The variant of the badge.
   * @default "indigo"
   */
  variant?: keyof typeof variants;
  children?: React.ReactNode;
}

export default function Badge({ variant = "indigo", children }: BadgeProps) {
  return (
    <span
      className={classNames(
        "text-xs font-medium mr-2 px-2.5 py-0.5 rounded",
        variants[variant]
      )}
    >
      {children}
    </span>
  );
}
