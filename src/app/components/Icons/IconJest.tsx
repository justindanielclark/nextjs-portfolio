import { IconContext } from "react-icons";
import { SiJest } from "react-icons/si";
type Props = {
  className?: string;
};
export default function IconJest({ className }: Props) {
  const classes = `bg-[#ffffff] p-0.5 rounded-lg${className ? ` ${className}` : ""}`;
  return (
    <IconContext.Provider value={{ color: "#C63D14", className: classes }}>
      <SiJest />
    </IconContext.Provider>
  );
}
