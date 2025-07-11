export interface ProfileInitialsProps {
  size?: number;
  variants?: "primaryBg" | "whiteBg";
  firstLetter?: string;
  secondLetter?: string;
  color?: string;
  className?: string;
}

export default function ProfileInitials({
  size,
  firstLetter,
  secondLetter,
  variants,
  color,
  className,
}: ProfileInitialsProps) {
  return (
    <span
      style={{
        width: `${size}px`,
        height: `${size}px`,
        fontSize: `${size! / 2.5}px`,
        color:
          variants === "primaryBg"
            ? "#FFFFFF"
            : variants === "whiteBg"
            ? "#003CB5"
            : color
            ? color
            : "#252525",
      }}
      className={`rounded-full grid place-content-center font-black uppercase relative overflow-hidden ${className}`}
    >
      <span
        style={{
          background:
            firstLetter && secondLetter
              ? variants === "primaryBg"
                ? "#003CB5"
                : variants === "whiteBg"
                ? "#FFFFFF"
                : color
                ? lightenColor(color)
                : "#2525251a"
              : "#2525251a",
        }}
        className={`absolute top-0 left-0 block w-full h-full`}
      ></span>
      <span className="relative">
        {firstLetter}
        {secondLetter}
      </span>
    </span>
  );
}
