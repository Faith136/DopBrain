import React from 'react'
import styles from './products.module.css';
import Link from 'next/link';

export default function Products() {
  return (
    <div className={styles.products}>
        
        <div className={`${styles.wrapper} container`}>
        <h2>Products Page</h2>
        <p>Here you can find a variety of products.</p>
            <ul className={styles['products-list']}>
                <p>Products go here</p>
            </ul>
            <Link href="/products" className={styles.button}>
            <button>View All Products</button>
            </Link>
        </div>
    </div>
  )
}
