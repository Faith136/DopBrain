import React from 'react'
import styles from './categories.module.css'

export default async function Categories() {
  const data = await fetch('https://dummyjson.com/products')
  const response = await data.json()
  const categories = response.products
  return (
    <div className={styles.categories}>
      <h2>Our Categories</h2>
      <ul className={`${styles.wrapper} container`}>
        {
          categories.map(category => (
            <li key={category.id} className={styles.category}>
              {category.title}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
