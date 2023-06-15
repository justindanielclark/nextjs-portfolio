import { IconContext } from "react-icons";
import { SiTypescript } from "react-icons/si";
type Props = {
  className?: string;
};
export default function IconTypescript({ className }: Props) {
  const classes = `bg-[#ffffff] rounded-lg${className ? ` ${className}` : ""}`;
  return (
    <IconContext.Provider value={{ color: "#007acc", className: classes }}>
      <SiTypescript />
    </IconContext.Provider>
  );
}
