import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-slate-900 z-10">
      <Container>
        <div className="flex flex-row justify-center">
          <p>
            <Link
              href={"https://github.com/justindanielclark?tab=repositories"}
              className="flex flex-row items-center gap-2"
            >
              <SiGithub />
              Check out my Github
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
