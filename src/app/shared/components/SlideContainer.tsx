import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

function SlideContainer({ children, className, id }: Props) {
  const classes = `basis-full max-h-full overflow-hidden shrink-0 p-2 w-full mx-auto max-w-3xl z-10${
    className ? ` ${className}` : ""
  }`;
  return (
    <article id={id ? id : ""} className={classes}>
      {children}
    </article>
  );
}

export default SlideContainer;
