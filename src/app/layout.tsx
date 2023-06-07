import Layout from "./shared/components/Layout";
import "./globals.css";

export const metadata = {
  title: "Justin Clark - Portfolio",
  description: "Created With NextJS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-white bg-slate-800 w-screen min-w-full">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
