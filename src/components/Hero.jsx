import heroProfile from "../assets/images/hero-profile.jpg";
import grainImage from "../assets/images/grain.jpg";

export default function Hero() {
  return (
    <>
      <section className="section relative h-svh overflow-clip border z-0">
        {/* blue gradient circle */}
        <div className="absolute -top-28 -left-28 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-blue-400/20 to-blue-500/20 blur-[80px]"></div>

        {/* applied grain effect on the bg */}
        <div
          className="absolute inset-0 -z-30 opacity-10"
          style={{
            backgroundImage: `url(${grainImage})`,
          }}
        ></div>

        <div className="size-[620px]  hero-ring"></div>
        <div className="size-[820px]  hero-ring"></div>
        <div className="size-[1020px]  hero-ring"></div>
        <div className="size-[1220px]  hero-ring"></div>

        <div className="absolute top-1/2 left-1/2 container -translate-x-1/2 -translate-y-1/2 space-y-8 pt-8">
          {/* image */}
          <div className="size-fluid-hero mx-auto overflow-hidden rounded-full border-4 border-blue-500">
            <img src={heroProfile} alt="" />
          </div>
          {/* content */}
          <div className="text-center">
            <h2 className="text-fluid-subheading">Hi, I&apos;m George —</h2>
            <h1 className="text-fluid-heading mb-2 text-blue-600">
              Frontend Developer
            </h1>
            <p className="mx-auto mb-8 max-w-md sm:text-lg md:max-w-full">
              I design and build modern, responsive websites that blend style
              with functionality.
            </p>
            {/* buttons */}
            <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
              <a
                href="#project"
                className="btn group border border-blue-600 bg-blue-600 text-white transition hover:scale-105 hover:bg-blue-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e3e3e3"
                  className="inline-block group-hover:rotate-12"
                >
                  <path d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z" />
                </svg>
                View My Work
              </a>
              <a
                href="#"
                className="btn group border border-gray-200 text-gray-400 hover:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e3e3e3"
                  className="inline-block fill-gray-400 transition group-hover:translate-y-1"
                >
                  <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                </svg>
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
          fill="#e3e3e3"
          className="absolute bottom-8 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 animate-bounce fill-gray-600"
        >
          <path d="M480-80 200-360l56-57 184 184v-287h80v287l184-183 56 56L480-80Zm-40-520v-120h80v120h-80Zm0-200v-80h80v80h-80Z" />
        </svg>
      </section>
    </>
  );
}
