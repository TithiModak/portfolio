"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import DraggableModal from "../../components/DraggableModal";

export default function AboutPage() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-40" onClick={handleClose}>
      <DraggableModal
        title="about"
        onClose={handleClose}
      >
        <section className="relative py-12 px-6 min-h-screen flex items-center justify-center">
          <div className="relative z-20 w-full max-w-4xl">
            <div className="relative w-full rounded-2xl bg-white dark:bg-[#BBBBBB] shadow-2xl overflow-hidden">
              {/* Header bar */}
              <div className="h-12 bg-[#B77F7F] dark:bg-[#5A4875]" />
              
              <div className="flex flex-col md:flex-row p-8 md:p-12 gap-8">
                {/* Fixed/Sticky Photo and Name Section */}
                <div className="md:sticky md:top-8 md:self-start flex-shrink-0 flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-0">
                  <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#B77F7F] dark:border-[#5A4875] shadow-lg flex-shrink-0">
                    <Image
                      src="/meee.png"
                      alt="Tithi"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start md:items-center md:mt-3">
                    <h2 className="text-xl md:text-2xl font-extrabold text-purple-500">Tithi Modak</h2>
                    <p className="text-zinc-600 dark:text-black text-xs md:text-sm leading-tight">developer, content creator</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col justify-start">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-black dark:text-black mb-2">
                    Hi! I&apos;m Tithi
                  </h1>
                  
                  <p className="text-zinc-700 dark:text-zinc-800 mb-3 leading-relaxed text-sm md:text-base">
                    I&apos;m a software developer and content creator with a passion for building engaging digital experiences. With a background in web development and a love for storytelling, I create projects that blend technology and creativity.
                  </p>

                  <div className="space-y-2 mb-3">
                    <div className="flex items-start gap-3">
                      <span className="text-purple-500 font-bold text-lg mt-1">•</span>
                      <span className="text-zinc-700 dark:text-zinc-800 text-sm md:text-base">Create hand-drawn animations</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-purple-500 font-bold text-lg mt-1">•</span>
                      <span className="text-zinc-700 dark:text-zinc-800 text-sm md:text-base">Create videos talking about things I like</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-purple-500 font-bold text-lg mt-1">•</span>
                      <span className="text-zinc-700 dark:text-zinc-800 text-sm md:text-base">Create website wireframes and design</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-purple-500 font-bold text-lg mt-1">•</span>
                      <span className="text-zinc-700 dark:text-zinc-800 text-sm md:text-base">Do frontend web development</span>
                    </div>
                  </div>

                  <p className="text-zinc-700 dark:text-zinc-800 leading-relaxed text-sm md:text-base">
                    Whether it&apos;s coding a new app or sharing insights through content, I strive to inspire and connect with others in the tech community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DraggableModal>
    </div>
  );
}