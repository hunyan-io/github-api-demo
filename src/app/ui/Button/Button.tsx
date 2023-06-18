import classNames from "classnames";

const variants = {
  color: {
    github: {
      enabled: "text-[#24292F] bg-white hover:bg-gray-100 focus:ring-gray-500",
      disabled: "text-[#24292F] bg-gray-200 cursor-not-allowed",
    },
    indigo: {
      enabled:
        "text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
      disabled: "text-white bg-indigo-400 cursor-not-allowed",
    },
  },
  size: {
    sm: {
      button: "font-medium rounded-lg text-sm px-5 py-2.5",
      icon: "-ml-1 mr-2 text-base",
    },
    lg: {
      button: "font-medium rounded-xl text-lg px-6 py-4",
      icon: "-ml-2 mr-3 text-xl",
    },
  },
};

interface ButtonProps {
  /**
   * The color variant of the button.
   * @default "github"
   */
  colorVariant?: keyof typeof variants.color;
  /**
   * The size variant of the button.
   * @default "lg"
   */
  sizeVariant?: keyof typeof variants.size;
  /**
   * If specified, an icon that is displayed on the left side of the button.
   */
  icon?: React.ReactNode;
  /**
   * The type of the button element.
   * @default "button"
   */
  type?: "button" | "submit" | "reset";
  /**
   * If true, the button will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * The callback function that is invoked when the button is clicked.
   */
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function Button({
  colorVariant = "github",
  sizeVariant = "lg",
  icon,
  children,
  className,
  disabled,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={classNames(
        "focus:ring-4 focus:outline-none text-center inline-flex items-center active:scale-95 transition-transform ease",
        disabled
          ? variants.color[colorVariant].disabled
          : variants.color[colorVariant].enabled,
        variants.size[sizeVariant].button,
        className
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <div className={variants.size[sizeVariant].icon}>{icon}</div>}
      {children}
    </button>
  );
}
