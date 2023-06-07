import React from "react";

type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return <div className="p-2 mx-auto max-w-3xl z-10">{children}</div>;
}

export default Container;
