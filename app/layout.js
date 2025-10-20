'use client';
import { Open_Sans, Raleway } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata = {
  title: "Activities to help Increase Dopamine",
  description: "Simple daily Habits to Increase Dopamine and feel happier and lighter",
  metadataBase: new URL("https://dop-brain-75ao.vercel.app/")
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
      <body className={`${openSans.variable} ${raleway.variable}`}>
        <Header />

        <main>
          {children}
          <Toaster/>
        </main>

        <Footer />
      </body>
      </SessionProvider>
    </html>
  );
}
