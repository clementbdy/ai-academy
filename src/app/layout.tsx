import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Academy",
  description: "Mon école personnelle de l'intelligence artificielle.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-background text-foreground">
        <Script id="theme-init" strategy="beforeInteractive">
          {`try {
            if (localStorage.getItem("ai-academy-theme") === "light") {
              document.documentElement.setAttribute("data-theme", "light");
            }
          } catch (e) {}`}
        </Script>
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-5xl px-8 py-10">{children}</div>
        </main>
      </body>
    </html>
  );
}
