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
    <html lang="en" className="h-screen min-h-screen max-h-screen w-screen">
      <body className="text-white bg-slate-800 flex flex-col relative w-full h-screen min-h-screen max-h-screen">
        <Header />
        {children}
        <Footer />
        <Canvas />
      </body>
    </html>
  );
}
