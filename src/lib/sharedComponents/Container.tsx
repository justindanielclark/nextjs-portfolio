type Props = {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className }: Props) {
  const classes = ["p-2", "mx-auto", "max-w-3xl", "z-10"];
  if (className) {
    classes.push(...className.split(" "));
  }
  return <div className={classes.join(" ")}>{children}</div>;
}

export default Container;
