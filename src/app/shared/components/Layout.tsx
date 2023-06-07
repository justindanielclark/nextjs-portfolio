import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Canvas from "./CanvasBackground/Canvas";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="h-screen min-h-screen max-h-screen flex flex-col relative">
      <Header />
      <Main>{children}</Main>
      <Footer />
      <Canvas />
    </div>
  );
}

export default Layout;
