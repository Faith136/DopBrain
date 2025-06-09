import React from 'react'
import styles from './products.module.css';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';

export default async function Products() {
  const data = await fetch('https://dummyjson.com/products?limit=12&sortBy=title&order=desc')
    const products = await data.json()
  return (
    <div className={styles.products}>
      <div className={styles.wrapper}>
        <h2>Products Page</h2>
        <p>Here you can find a variety of products.</p>
        <ul className={styles['products-list']}>
          {products.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
        <Link href="/products" className={styles.button}>
          <button>View All Products</button>
        </Link>
      </div>
    </div>
  )
}
