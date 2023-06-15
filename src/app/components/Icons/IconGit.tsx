import { IconContext } from "react-icons";
import { SiGit } from "react-icons/si";
type Props = {
  className?: string;
};
export default function IconGit({ className }: Props) {
  const classes = `bg-[#3E2C00] rounded-lg${className ? ` ${className}` : ""}`;
  return (
    <IconContext.Provider value={{ color: "#F1502F", className: classes }}>
      <SiGit />
    </IconContext.Provider>
  );
}
