import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Ayusa Summer Camp in Japan 2025 | Ayusa by Intrax",
  description: "Learn or improve your Japanese and make lifelong friends through an unforgettable 3 weeks in Japan. Japanese language classes, volunteer activities, homestay, school visits and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Remove Next.js loading indicators
              function removeNextJSIndicators() {
                // Remove data-next-mark-loading elements
                const indicators = document.querySelectorAll('[data-next-mark-loading]');
                indicators.forEach(el => el.remove());

                // Remove SVG indicators
                const svgs = document.querySelectorAll('svg[width="40"][height="40"]');
                svgs.forEach(el => el.remove());

                const logoSvgs = document.querySelectorAll('svg[viewBox="0 0 40 40"]');
                logoSvgs.forEach(el => el.remove());

                // Remove bottom-left fixed elements
                const fixedElements = document.querySelectorAll('div[style*="position: fixed"][style*="bottom"][style*="left"]');
                fixedElements.forEach(el => el.remove());

                // Remove Next.js toast wrappers
                const toastWrappers = document.querySelectorAll('[data-nextjs-toast-wrapper]');
                toastWrappers.forEach(el => el.remove());

                // Remove any element with Next.js N logo background
                const bgElements = document.querySelectorAll('*[style*="background-image"]');
                bgElements.forEach(el => {
                  if (el.style.backgroundImage && el.style.backgroundImage.includes('data:image')) {
                    el.remove();
                  }
                });
              }

              // Run immediately and on DOM changes
              removeNextJSIndicators();

              // Create observer to remove indicators as they appear
              const observer = new MutationObserver(removeNextJSIndicators);
              observer.observe(document.body, { childList: true, subtree: true });

              // Also run on page load
              window.addEventListener('load', removeNextJSIndicators);
            `,
          }}
        />
      </body>
    </html>
  );
}
