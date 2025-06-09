import React from 'react'
import styles from './categories.module.css'

export default async function Categories() {
  const data = await fetch('https://dummyjson.com/products')
  const response = await data.json()
  const products = response.products
  return (
    <div className={styles.categories}>
      <h2>Our Categories</h2>
      <ul className={`${styles.wrapper} container`}>
        {
          products.map(product => (
            <li key={product.id} className={styles.category}>
              {product.title}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
