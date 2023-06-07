import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

function Header() {
  return (
    <header className="bg-slate-700 z-10">
      <Container>
        <div className="flex flex-row justify-end items-center">
          <nav>
            <ul className="flex flex-row gap-4">
              <li
                className="bg-green-700 py-0.5 px-2 rounded-lg border-2 font-bold border-green-800 drop-shadow-md shadow-black text-white
							"
              >
                <Link href={"/"}>Home</Link>
              </li>
              <li
                className="bg-green-700 py-0.5 px-2 rounded-lg border-2 font-bold border-green-800 drop-shadow-md shadow-black text-white
							"
              >
                <Link href={"/projects"}>Projects</Link>
              </li>
              <li
                className="bg-green-700 py-0.5 px-2 rounded-lg border-2 font-bold border-green-800 drop-shadow-md shadow-black text-white
							"
              >
                <Link href={"/blog"}>Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
