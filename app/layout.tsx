import "./globals.css";
import type { Metadata } from "next";
import Footer from "../components/Footer";
import { ModalProvider } from "../contexts/ModalContext";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#E5B7B7] dark:bg-[#1E2933] text-zinc-900 dark:text-zinc-100 transition-colors duration-200 relative">
        <ModalProvider>
          <main className="min-h-screenpb-40">{children}</main>
          <Footer />
        </ModalProvider>
      </body> 
    </html>
  );
}