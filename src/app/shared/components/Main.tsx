import React from "react";

type Props = {
  children: React.ReactNode;
};

function Main({ children }: Props) {
  return <main className="flex flex-col gap-10 flex-1 z-10 overflow-hidden">{children}</main>;
}

export default Main;
