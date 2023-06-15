import { IconContext } from "react-icons";
import { SiSass } from "react-icons/si";
type Props = {
  className?: string;
};
export default function IconSass({ className }: Props) {
  const classes = `bg-[#ffffff] p-0.5 rounded-lg${className ? ` ${className}` : ""}`;
  return (
    <IconContext.Provider value={{ color: "#c69", className: classes }}>
      <SiSass />
    </IconContext.Provider>
  );
}
