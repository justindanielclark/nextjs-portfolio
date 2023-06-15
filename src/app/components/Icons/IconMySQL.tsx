import { IconContext } from "react-icons";
import { SiMysql } from "react-icons/si";
type Props = {
  className?: string;
};
export default function IconMysql({ className }: Props) {
  const classes = `bg-[#ffffff] p-0.5 rounded-lg${className ? ` ${className}` : ""}`;
  return (
    <IconContext.Provider value={{ color: "#00758F", className: classes }}>
      <SiMysql />
    </IconContext.Provider>
  );
}
