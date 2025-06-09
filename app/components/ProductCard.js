import React from 'react'
import styles from './productCard.module.css';
import Link from 'next/link';
//import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <li>
        <div className={styles["product-card"]}>
          <img src={product.thumbnail} alt={product.title} />
          <div className={styles.info}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span>${product.price}</span>
          </div>
        </div>
      </li>
    </Link>
  )
}
