import { IconContext } from "react-icons";
import { SiMongodb } from "react-icons/si";
type Props = {
  className?: string;
};
export default function IconMongoDB({ className }: Props) {
  const classes = `bg-[#ffffff] p-0.5 rounded-lg${className ? ` ${className}` : ""}`;
  return (
    <IconContext.Provider value={{ color: "#68A063", className: classes }}>
      <SiMongodb />
    </IconContext.Provider>
  );
}
