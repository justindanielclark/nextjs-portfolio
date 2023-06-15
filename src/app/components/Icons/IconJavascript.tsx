import { IconContext } from "react-icons";
import { SiJavascript } from "react-icons/si";
type Props = {
  className?: string;
};
export default function IconJavascript({ className }: Props) {
  const classes = `bg-[#323330] rounded-lg${className ? ` ${className}` : ""}`;
  return (
    <IconContext.Provider value={{ color: "#f0db4f", className: classes }}>
      <SiJavascript />
    </IconContext.Provider>
  );
}
