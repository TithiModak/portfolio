import Link from "next/link";
import Image from "next/image";
import SunToggle from "../components/SunToggle";
import MuteToggle from "../components/MuteToggle";
import NavIconButton from "../components/NavIconButton";
import ModalContainer from "../components/ModalContainer";

export default function HomePage() {
  return (
    <>
      <ModalContainer />
    <main className="min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-12 px-6 min-h-screen flex items-center justify-center">

        {/* Decorative (clickable) sun and mute toggle */}
        <div className="absolute top-8 left-8 z-20 flex items-center gap-3">
          <MuteToggle />
          <SunToggle />
        </div>

        {/* Center card */}
        <div className="relative z-20 w-full max-w-[800px] mx-auto">
          <div className="relative w-full aspect-[800/560] rounded-2xl bg-white dark:bg-[#BBBBBB] shadow-2xl flex flex-col">
            <div className="h-12 rounded-t-2xl bg-[#7077FF]/85 dark:bg-[#5A4875]" />

            <div className="flex-1 p-12 text-center flex flex-col items-center justify-center">
              <h1 className="flex items-end justify-center gap-6 font-extrabold leading-none">
                  <span className="text-black dark:text-black text-5xl sm:text-6xl">hi</span>
                  <span className="text-[#D34F4F]/90 dark:text-[#844FD3] text-[56px] sm:text-[72px]">I&apos;m Tithi</span>
                </h1>
                <span className=" text-zinc-600 dark:text-black text-xl sm:text-10xs"> developer, content creator</span>


              <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
                <NavIconButton modalType="about" label="about">
                  <IconInfo />
                </NavIconButton>

                <NavIconButton modalType="links" label="links">
                  <IconLink />
                </NavIconButton>

                <NavIconButton modalType="projects" label="projects">
                  <IconProjects />
                </NavIconButton>

                <NavIconButton modalType="faq" label="faq">
                  <IconFaq />
                </NavIconButton>

                <NavIconButton modalType="contact" label="contacts">
                  <IconContact />
                </NavIconButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  ); 
}

/* NavIcon moved to components/NavIcon.tsx (client component) */

/* ================= ICONS ================= */

function IconInfo() {
  return (
    <Image src="/about.png" width="78" height="78" alt="info icon" />
  );
}

function IconLink() {
  return (
    <Image src="/link.png" width="78" height="78" alt="link icon" />

  );
}

function IconProjects() {
  return (
    <Image src="/projects.png" width="58" height="58" alt="projects icon" />
  );
}

function IconFaq() {
  return (
    <Image src="/faq.png" width="78" height="78" alt="faq icon" />
  );
}

function IconContact() {
  return (
    <Image src="/contacts.png" width="78" height="78" alt="contact icon" />
  );
}
