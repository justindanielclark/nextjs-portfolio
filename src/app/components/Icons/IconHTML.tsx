import { IconContext } from "react-icons";
import { SiHtml5 } from "react-icons/si";
type Props = {
  className?: string;
};
export default function IconHTML({ className }: Props) {
  const classes = `bg-[#ffffff] pt-1 pb-0.5 rounded-lg${className ? ` ${className}` : ""}`;
  return (
    <IconContext.Provider value={{ color: "#f06529", className: classes }}>
      <SiHtml5 />
    </IconContext.Provider>
  );
}
