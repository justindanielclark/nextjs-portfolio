"use client";
import React from "react";
import Link from "next/link";
import Container from "../../lib/sharedComponents/Container";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const [atProjects, atBlog] = [pathname.slice(0, 9) === "/projects", pathname.slice(0, 5) === "/blog"];

  return (
    <header className="bg-slate-700 z-10">
      <Container>
        <div className="flex flex-row justify-end items-center">
          <nav>
            <ul className="flex flex-row gap-4">
              <Link href={"/"}>
                <li className={!atProjects && !atBlog ? "underline underline-offset-4" : ""}>Home</li>
              </Link>
              <Link href={"/projects"}>
                <li className={atProjects ? "underline underline-offset-4" : ""}>Projects</li>
              </Link>
              <Link href={"/blog"}>
                <li className={atBlog ? "underline underline-offset-4" : ""}>Blog</li>
              </Link>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
