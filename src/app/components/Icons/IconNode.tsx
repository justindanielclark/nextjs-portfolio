import { IconContext } from "react-icons";
import { SiNodedotjs } from "react-icons/si";
type Props = {
  className?: string;
};
export default function IconNode({ className }: Props) {
  const classes = `bg-black rounded-lg${className ? ` ${className}` : ""}`;
  return (
    <IconContext.Provider value={{ color: "#68A063", className: classes }}>
      <SiNodedotjs />
    </IconContext.Provider>
  );
}
