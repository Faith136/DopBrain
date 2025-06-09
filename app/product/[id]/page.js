import React from 'react'
import styles from './product.module.css'
import Image from 'next/image'


export default async function page({ params }) {
  const { id } = await params
  const data = await fetch(`https://dummyjson.com/products/${id}`)
  const product = await data.json()
  if (!product) {
    return <div className={styles.error}>Product not found</div>
  }
  return (
    <div className={`${styles["product-page"]} container`}>
      <section className={styles.photo}>
        <Image src={product.image[0]} alt={product.title} layout="responsive" width={344} height={34} />
      </section>
      <section className={styles.info}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.small}>Product ID: {id}</p>
        <div className={styles['add-to-bag']}>
          <button >Add Activities</button></div>
      </section>
    </div>
  )
}
   
