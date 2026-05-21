import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import { Toaster }
from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PawsNest",
  description: "Pet Adoption Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        scroll-smooth
        bg-[#F4EFE6]
      `}
    >
     <body>

  {children}

  <Toaster
    richColors
    position="top-right"
  />

</body>
    </html>
  );
}
