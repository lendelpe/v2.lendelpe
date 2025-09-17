import heroProfile from "../assets/images/hero-profile.jpg";
import grainImage from "../assets/images/grain.jpg";
import { ArrowDown, Download, LaptopMinimal } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="section relative z-0 h-svh overflow-clip bg-gray-900">
        {/* blue gradient circle */}
        <div className="absolute -top-28 -left-28 -z-10 h-[250px] w-[250px] sm:h-[500px] sm:w-[500px]  rounded-full bg-gradient-to-tr from-blue-400/5 to-blue-500/5 blur-[80px]"></div>

        {/* applied grain effect on the bg */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage})`,
          }}
        ></div>

        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>

        <div className="absolute top-1/2 left-1/2 container -translate-x-1/2 -translate-y-1/2 space-y-8 pt-8">
          {/* image */}
          <div className="size-fluid-hero relative mx-auto overflow-hidden rounded-full border-2 border-blue-300">

            <img src={heroProfile} alt="" />
          </div>
          {/* content */}
          <div className="text-center">
            <h2 className="text-fluid-subheading">Hi, I&apos;m George —</h2>
            <h1 className="text-fluid-heading mb-2 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent max-w-max mx-auto">
              Frontend Developer
            </h1>
            <p className="mx-auto mb-8 max-w-md sm:text-lg md:max-w-full text-white/60">
              I design and build modern, responsive websites that blend style
              with functionality.
            </p>
            {/* buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#project"
                className="btn group bg-gradient-to-r from-blue-400 to-blue-500 text-white transition hover:scale-105"
              >
               <LaptopMinimal className="group-hover:rotate-12" />
                View My Work
              </a>
              <a
                href="#"
                className="btn group border border-white/15 transition text-white/60"
              >
                <Download size={20} className="group-hover:scale-110" />
                Download CV
              </a>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#fff"
          className="absolute bottom-8 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 animate-bounce fill-white/30"
        >
          <path d="M480-80 200-360l56-57 184 184v-287h80v287l184-183 56 56L480-80Zm-40-520v-120h80v120h-80Zm0-200v-80h80v80h-80Z" />
        </svg>
      </section>
    </>
  );
}
