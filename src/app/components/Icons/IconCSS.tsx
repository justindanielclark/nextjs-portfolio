import { IconContext } from "react-icons";
import { SiCss3 } from "react-icons/si";
type Props = {
  className?: string;
};
export default function IconCSS({ className }: Props) {
  const classes = `bg-[#ffffff] pt-1 pb-0.5 rounded-lg${className ? ` ${className}` : ""}`;
  return (
    <IconContext.Provider value={{ color: "#2965f1", className: classes }}>
      <SiCss3 />
    </IconContext.Provider>
  );
}
