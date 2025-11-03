'use client';

import React from 'react'
import styles from './categories.module.css'

export default function Categories({selectedCategory, onCategoryChange}) {
 {/* const res = await fetch('http://localhost:3000/api/categories', { cache: 'no-store' });
  const categories = await res.json();*/}

const categories = [
  { id: "appetizers", title: "Appetizers" , description: "Quick 5-15 min boosts to start your day" },
 { id: "mains", title: "Main Course" , description: "Substantial 30-60 min activities" },
    { id: "desserts", title: "Desserts" , description: "Sweet rewards and wind-down activities" },
  { id: "drinks", title: "Drinks & Sips" , description: "Refreshing micro-activities" },
   { id: "sweets", title: "Specials" , description: "Nourishing side activities" },
  { id: "sides", title: "Sides (Soul Snacks)" , description: "Indulgent feel-good moments" },
  { id: "digestive", title: "Digestives (Reset & Recovery)",description: "Mindful activities to process and reflect" },
]

  return (
    <div className={styles.categories}>
      <h2>Our Categories</h2>
      <ul className={`${styles.wrapper} container`}>
        {/*{categories.map(category => (
          <li key={category.id} className={styles.category}>
            {category.title}
          </li>
        ))}*/}
         {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`${styles.buttony} ${selectedCategory === category.id ? styles.categoryPillActive : ""}`}
          >
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
