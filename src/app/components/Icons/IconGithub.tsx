import { IconContext } from "react-icons";
import { SiGithub } from "react-icons/si";
type Props = {
  className?: string;
};
export default function IconGithub({ className }: Props) {
  const classes = `bg-white rounded-lg${className ? ` ${className}` : ""}`;
  return (
    <IconContext.Provider value={{ color: "#000000", className: classes }}>
      <SiGithub />
    </IconContext.Provider>
  );
}
