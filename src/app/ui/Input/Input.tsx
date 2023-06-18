import classNames from "classnames";

interface InputProps {
  /**
   * If specified, an icon that is displayed on the left side of the input.
   * @default null
   */
  icon?: React.ReactNode;
  /**
   * The type of the input.
   * @default "text"
   */
  type?: string;
  /**
   * The placeholder text.
   */
  placeholder?: string;
  /**
   * The value of the input.
   */
  value?: string;
  /**
   * The callback function that is invoked when the input value changes.
   * @param value The new value of the input.
   */
  onChange?: (value: string) => void;
  className?: string;
}

export default function Input({
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="relative group">
      {icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-2xl text-slate-800 group-focus-within:text-indigo-500">
          {icon}
        </div>
      )}
      <input
        type={type}
        className={classNames(
          "border text-base rounded-lg block w-full p-3 bg-transparent border-slate-800 placeholder-indigo-300 placeholder-opacity-50 text-white focus:ring-indigo-500 focus:ring-1 focus:border-indigo-500 outline-none",
          { "pl-12": icon }
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange && ((e) => onChange(e.target.value))}
      />
    </div>
  );
}
