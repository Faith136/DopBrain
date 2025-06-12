import React from 'react'
import styles from './categories.module.css'

export default async function Categories() {
  const res = await fetch('http://localhost:3000/api/categories', { cache: 'no-store' });
  const categories = await res.json();

  return (
    <div className={styles.categories}>
      <h2>Our Categories</h2>
      <ul className={`${styles.wrapper} container`}>
        {categories.map(category => (
          <li key={category.id} className={styles.category}>
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
