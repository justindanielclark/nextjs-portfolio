import "./globals.css";
import "highlight.js/styles/atom-one-dark.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Canvas from "./components/CanvasBackground/Canvas";

export const metadata = {
  title: "Justin Clark - Portfolio",
  description: "Created With NextJS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-white bg-slate-800 w-screen min-w-full h-screen min-h-screen max-h-screen flex flex-col relative">
        <Header />
        {children}
        <Footer />
        <Canvas />
      </body>
    </html>
  );
}
