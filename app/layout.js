'use client';
import { Open_Sans, Raleway } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

{/* export const metadata = {
  title: "Activities to help Increase Dopamine",
  description: "Simple daily Habits to Increase Dopamine and feel happier and lighter",
  metadataBase: new URL("https://dop-brain-75ao.vercel.app/")
}; */}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <Head>
       <title>DopBrain</title> 
     <meta name="description" content="Simple daily Habits to Increase Dopamine and feel happier and lighter" /> 
     <meta name="viewport" content="width=device-width, initial-scale=1" /> 
     <link rel="icon" href="/favicon.ico" /> 
     <meta property="og:title" content="Activities to help Increase Dopamine" /> 
     <meta property="og:description" content="Simple daily Habits to Increase Dopamine and feel happier and lighter" /> 
     <meta property="og:url" content="https://dop-brain-75ao.vercel.app" /> 
     <meta property="og:type" content="website" /> 
     </Head>
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
