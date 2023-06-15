import { IconContext } from "react-icons";
import { SiExpress } from "react-icons/si";
type Props = {
  className?: string;
};
export default function IconExpress({ className }: Props) {
  const classes = `bg-[#ffffff] p-0.5 rounded-lg${className ? ` ${className}` : ""}`;
  return (
    <IconContext.Provider value={{ color: "#000000", className: classes }}>
      <SiExpress />
    </IconContext.Provider>
  );
}
