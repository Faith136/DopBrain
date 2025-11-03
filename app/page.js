"use client"

import { useState } from "react"
import Hero from './homepage/Hero';
import Categories from './homepage/Categories';
import './globals.css'; // Import global styles
import Products from './homepage/Products';
import { StatsBar } from './components/Stats-bar';
import Testimonials from './components/Testimonials';
import Head from "next/head";

/* const metadata = {
  title: "Activities to help Increase Dopamine",
  description: "Simple daily Habits to Increase Dopamine and feel happier and lighter",
  metadataBase: new URL("https://dop-brain-75ao.vercel.app/")
};*/

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("appetizers")
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    // Scroll to activities section
    setTimeout(() => {
      const activitiesSection = document.querySelector("[data-activities-section]")
      if (activitiesSection) {
        activitiesSection.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)
  }
  return (
    <div> 
      <Head>
              <title>Activities to help Increase Dopamine</title>
              <meta name="description" content="Simple daily Habits to Increase Dopamine and feel happier and lighter" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
              <meta property="og:title" content="Activities to help Increase Dopamine" />
              <meta property="og:description" content="Simple daily Habits to Increase Dopamine and feel happier and lighter" />
              <meta property="og:url" content="https://dop-brain-75ao.vercel.app/" />
              <meta property="og:type" content="website" />
            </Head>
   <Hero onCategoryChange={handleCategoryChange}/>
   <StatsBar />
   <Categories selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
   <Products selectedCategory={selectedCategory}/>
   <Testimonials />
   </div> 
  )
}



