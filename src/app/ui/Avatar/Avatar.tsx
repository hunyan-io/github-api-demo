import classNames from "classnames";
import Image from "next/image";

interface AvatarProps {
  /**
   * The URL of the image.
   */
  src: string;
  /**
   * The alternative text of the image.
   */
  alt?: string;
  /**
   * The size of the avatar.
   */
  size?: "sm" | "lg";
  /**
   * If provided, a label that is displayed in the right side of the avatar.
   */
  label?: string;
  /**
   * If true, the avatar will have a ring border.
   */
  bordered?: boolean;
  className?: string;
}

const styles = {
  sm: {
    size: 40,
    label: "text-sm font-medium",
  },
  lg: {
    size: 64,
    label: "text-lg font-bold",
  },
};

export default function Avatar({
  src,
  label = "",
  alt = label,
  size = "sm",
  className,
  bordered,
}: AvatarProps) {
  const image = (
    <Image
      className={classNames(
        "rounded-full",
        {
          "ring-2 ring-white": bordered,
        },
        label ? undefined : className
      )}
      src={src}
      alt={alt}
      width={styles[size].size}
      height={styles[size].size}
    />
  );

  if (!label) {
    return image;
  }

  return (
    <div className={classNames("flex items-center space-x-4", className)}>
      {image}
      <div className={styles[size].label}>{label}</div>
    </div>
  );
}
