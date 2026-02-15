"use client";

import { useModal } from "../contexts/ModalContext";
import DraggableModal from "./DraggableModal";
import { useState } from "react";
import { playSound } from "../lib/soundUtils";


export default function ModalContainer() {
  const { activeModal, closeModal } = useModal();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const playQuestionOpenSound = () => {
    playSound("question-open.mp3");
  };

  const toggleFaq = (index: number) => {
    if (openFaqIndex !== index) {
      // Opening a new question
      playQuestionOpenSound();
    }
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  if (!activeModal) return null;

  const modalContent = {
    about: {
      title: "about",
      maxWidth: "887px",
      aspectRatio: "887/547",
      content: (
        <div className="space-y-4">
          <div className="sticky w-full flex justify-center">
            <div className="flex flex-col items-center md:flex-row md:items-center gap-8">
              <div className="w-36 h-36 rounded-full border-2 border-zinc-300 dark:border-zinc-700 group overflow-hidden">
                <img src="/meee.png" alt="Tithi" className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-mono font-semibold text-zinc-900 dark:text-zinc-100">Tithi Modak</h2>
                <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 mt-1">developer, content creator</p>
              </div>
            </div>
          </div>
          <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <p>I'm a <b className="font-bold">software developer and content creator</b> with a passion for building engaging digital experiences.</p>
            <p >Interested in working together? Let's connect- reach out to me at tithimodak2004@gmail.com</p>
            <ul className="space-y-1 pl-4">
              <li>• Create cool websites</li>
              <li>• Create videos for beauty,skincare and technology</li>
              <li>• Do ugc and brand collabs</li>
              <li>• Do frontend web development</li>
            </ul>
            <h3 className="font-mono font-semibold text-[20px] text-zinc-900 dark:text-zinc-100">Education</h3>
            <p >B.E. in Computer Science — NMIT (2022–2026)</p>
            <h3 className="font-semibold font-mono text-[18px] text-zinc-900 dark:text-zinc-100" >Other Interests</h3>
             <ul className="space-y-1 pl-4">
              <li>• app development</li>
              <li>• crack funny stupid jokes</li>
              <li>• painting,dancing,sleepinggg</li>
            </ul>

            <div className="border-t border-zinc-200 dark:border-zinc-800 pt-3 space-y-1">
              <p><strong className="font-bold font-mono">Location:</strong> Bengaluru, India</p>
              <p><strong className="font-bold font-mono">Education:</strong> Nitte Meenakshi Institute of technology</p>
              <p><strong className="font-bold font-mono">Interests:</strong> Web, ML, Blockchain, content creation</p>
            </div>
          </div>
        </div>
      ),
    },
    links: {
      title: "links",
      maxWidth: "700px",
      aspectRatio: "700/500",
      content: (
        <div className="grid grid-cols-2 gap-6 h-full">
          <a 
            href="https://github.com/tithimodak" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center justify-center gap-4 p-8 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
          >
            <img src="/github.png" alt="GitHub" width="60" height="60" />
            <div className="text-center">
              <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">GitHub</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">View my repositories</p>
            </div>
          </a>
          
          <a 
            href="https://x.com/riaxm04" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center justify-center gap-4 p-8 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
          >
            <img src="/x-bl.png" alt="X" width="80" height="80" />
            <div className="text-center">
          
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Follow my updates</p>
            </div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/tithi-modak-92bb8324b/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center justify-center gap-4 p-8 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
          >
            <img src="/linkedin.png" alt="LinkedIn" width="80" height="80" />
            <div className="text-center">
              <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">LinkedIn</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Connect with me</p>
            </div>
          </a>
          
          <a 
            href="https://www.instagram.com/riyaa_m2004/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center justify-center gap-4 p-8 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
          >
            <img src="/insta.png" alt="Instagram" width="65" height="65" />
            <div className="text-center">
              <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">Instagram</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Follow my creative content</p>
            </div>
          </a>
        </div>
      ),
    },
    projects: {
      title: "projects",
      maxWidth: "887px",
      aspectRatio: "887/547",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">My Projects</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center max-w-md">
            Explore my portfolio of projects with filtering by tech stack and detailed descriptions.
          </p>
          <a 
            href="/projects"
            className="px-6 py-3 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
          >
            View All Projects →
          </a>
        </div>
      ),
    },
    faq: {
      title: "faq",
      maxWidth: "887px",
      aspectRatio: "887/547",
      content: (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">FAQ</h2>
          <div className="space-y-2">
            {[
              {
                question: "What do you do?",
                answer: "I'm a software developer and a beauty content creator who loves building things and expressing creativity."
              },
              {
                question: "What technologies do you work with?",
                answer: "I primarily work with React, Next.js, TypeScript, and Tailwind CSS for frontend development. I also have experience with Node.js and various databases."
              },
              {
                question: "Are you available for freelance work?",
                answer: "Yes! I'm open to freelance opportunities and collaborations. Feel free to reach out through the contact section."
              },
              {
                question: "How can I contact you?",
                answer: "You can reach me through email or connect with me on social media platforms linked in the links section."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden bg-pink-50 dark:bg-zinc-800"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-zinc-600 dark:text-zinc-400 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaqIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-4 pb-3 text-sm text-zinc-600 dark:text-zinc-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    contact: {
      title: "contact",
      maxWidth: "700px",
      aspectRatio: "700/500",
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Get in Touch</h2>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">I'd love to hear from you.</p>
          </div>

          <div className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
            <p>📍 Bengaluru, India</p>
            <p>📧 tithimodak2004@gmail.com</p>
          </div>

          <form className="space-y-3 pt-2">
            <input
        type="text"
        placeholder="Your name"
        className="w-full px-3 py-2 text-xs rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600"
      />

      <input
        type="email"
        placeholder="Your email"
        className="w-full px-3 py-2 text-xs rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600"
      />

      <textarea
        rows={3}
        placeholder="Your message"
        className="w-full px-3 py-2 text-xs rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 resize-none"
      />

            <button
        type="submit"
        className="w-full py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
      >
        Send →
      </button>

            </form>
        </div>
      ),
    },
  };

  const current = modalContent[activeModal];

  const playCloseSound = () => {
    playSound("close.mp3");
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      playCloseSound();
      closeModal();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-40" onClick={handleBackdropClick}>
      <DraggableModal
        title={current.title}
        onClose={closeModal}
        useCardStyle={true}
        maxWidth={current.maxWidth}
        aspectRatio={current.aspectRatio}
      >
        {current.content}
      </DraggableModal>
    </div>
  );
}
