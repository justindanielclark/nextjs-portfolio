import { IconContext } from "react-icons";
import { SiReact } from "react-icons/si";
type Props = {
  className?: string;
};
export default function IconReact({ className }: Props) {
  const classes = `bg-black rounded-lg${className ? ` ${className}` : ""}`;
  return (
    <IconContext.Provider value={{ color: "#61DBFB", className: classes }}>
      <SiReact />
    </IconContext.Provider>
  );
}
