"use client";
import Image from "next/image";
import SlideContainer from "./components/SlideContainer";
import welcomeImage from "../../public/images/welcome-image1000x1000.jpg";
import IconTypescript from "./components/Icons/IconTypescript";
import IconJavascript from "./components/Icons/IconJavascript";
import IconHTML from "./components/Icons/IconHTML";
import IconCSS from "./components/Icons/IconCSS";
import IconSass from "./components/Icons/IconSass";
import IconJest from "./components/Icons/IconJest";
import IconNext from "./components/Icons/IconNext";
import IconExpress from "./components/Icons/IconExpress";
import IconNode from "./components/Icons/IconNode";
import IconMongoDB from "./components/Icons/IconMongoDB";
import IconMysql from "./components/Icons/IconMySQL";
import IconGit from "./components/Icons/IconGit";
import IconGithub from "./components/Icons/IconGithub";
import IconTailwindcss from "./components/Icons/IconTailwind";
import IconReact from "./components/Icons/IconReact";

const ICON_CLASSES = "w-20 h-20";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 z-10 overflow-hidden">
      <SlideContainer id="firstSlide" className="relative flex flex-col justify-between gap-2">
        <div className="flex flex-col md:flex-row flex-1 items-center gap-6">
          <div className="basis-1/3 max-h-96 md:basis-1/2">
            <Image
              src={welcomeImage}
              alt="welcome_image"
              className="mt-4 md:mt-0 max-w-full max-h-full w-fit h-fit rounded-full bg-slate-300 border-2 drop-shadow-lg shadow-slate-900"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center gap-4">
            <h1 className="text-center font-bold sm:text-2xl text-4xl md:text-5xl underline underline-offset-2">
              Hi, my name is Justin
            </h1>
            <h2 className="text-center font-bold sm:text-xl md:text-2xl">
              I like making beautiful websites that focus on clean user interfaces made with intuitive designs
            </h2>
          </div>
        </div>
        <button
          className="bg-slate-800 border-2 border-slate-500 p-2 rounded-lg font-bold"
          onClick={(e) => {
            const scrollElement = document.getElementById("secondSlide");
            if (scrollElement) {
              scrollElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          View My Skillset
        </button>
      </SlideContainer>
      <SlideContainer className="flex flex-col" id="secondSlide">
        <button
          className="bg-slate-800 border-2 border-slate-500 p-2 rounded-lg font-bold"
          onClick={(e) => {
            const scrollElement = document.getElementById("firstSlide");
            if (scrollElement) {
              scrollElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          Back To About Me
        </button>
        <div className="flex-1">
          <div>Languages:</div>
          <ul className="flex flex-row flex-wrap gap-4">
            <li>
              <IconTypescript className={ICON_CLASSES} />
            </li>
            <li>
              <IconJavascript className={ICON_CLASSES} />
            </li>
            <li>
              <IconHTML className={ICON_CLASSES} />
            </li>
            <li>
              <IconCSS className={ICON_CLASSES} />
            </li>
            <li>
              <IconSass className={ICON_CLASSES} />
            </li>
            <li>
              <IconJest className={ICON_CLASSES} />
            </li>
            <li>
              <IconNext className={ICON_CLASSES} />
            </li>
            <li>
              <IconExpress className={ICON_CLASSES} />
            </li>
            <li>
              <IconNode className={ICON_CLASSES} />
            </li>
            <li>
              <IconMongoDB className={ICON_CLASSES} />
            </li>
            <li>
              <IconMysql className={ICON_CLASSES} />
            </li>
            <li>
              <IconGit className={ICON_CLASSES} />
            </li>
            <li>
              <IconGithub className={ICON_CLASSES} />
            </li>
            <li>
              <IconTailwindcss className={ICON_CLASSES} />
            </li>
            <li>
              <IconReact className={ICON_CLASSES} />
            </li>
          </ul>
        </div>
        <button
          className="bg-slate-800 border-2 border-slate-500 p-2 rounded-lg font-bold"
          onClick={(e) => {
            const scrollElement = document.getElementById("firstSlide");
            if (scrollElement) {
              scrollElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          Next
        </button>
      </SlideContainer>
    </main>
  );
}
