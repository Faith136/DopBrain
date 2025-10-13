"use client"

import { useState } from "react"
import Hero from './homepage/Hero';
import Categories from './homepage/Categories';
import './globals.css'; // Import global styles
import Products from './homepage/Products';
import { StatsBar } from './components/Stats-bar';
import Testimonials from './components/Testimonials';

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
   <Hero onCategoryChange={handleCategoryChange}/>
   <StatsBar />
   <Categories selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
   <Products selectedCategory={selectedCategory}/>
   <Testimonials />
   </div> 
  )
}



