import { IconContext } from "react-icons";
import { SiTailwindcss } from "react-icons/si";
type Props = {
  className?: string;
};
export default function IconTailwindcss({ className }: Props) {
  const classes = `bg-white rounded-lg${className ? ` ${className}` : ""}`;
  return (
    <IconContext.Provider value={{ color: "#15C2B8", className: classes }}>
      <SiTailwindcss />
    </IconContext.Provider>
  );
}
