import React from 'react'
import styles from './productCard.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Zap } from "lucide-react"

export default function ProductCard({ product }) {
  const difficultyColors = {
    easy: "oklch(0.75 0.15 160)",
    medium: "oklch(0.68 0.18 45)",
    hard: "oklch(0.65 0.12 280)",
  }
  return (
    <Link href={`/product/${product.id}`}> 
     {/* <li>
        <div className={styles["product-card"]}>
          <img src={product.image} alt={product.title} />
          <div className={styles.info}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.activities.join(", ")}</p>
            <button>Open</button>
          </div>
        </div>
      </li>
   */}

 <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.activityName}>{product.name}</h3>
        <div className={styles.difficultyBadge} style={{ backgroundColor: difficultyColors[product.difficulty] }}>
          {product.difficulty}
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src="/wowear.jpg"
          alt={product.name}
          width={400}
          height={200}
          className={styles.activityImage}
        />
      </div>

      <div className={styles.cardContent}>
        <p className={styles.description}>Description</p>

        <div className={styles.cardMeta}>
          <div className={styles.metaItem}>
            <Clock className="w-4 h-4" />
            <span>{product.duration}min</span>
          </div>
          <div className={styles.metaItem}>
            <Zap className="w-4 h-4" />
            <span>{product.points}pts</span>
          </div>
        </div>

        <p className={styles.activityDescription}>{product.description}</p>

        <button className={styles.viewButton}>
          View Activity
        </button>
      </div>
    </div>
 </Link>
  )
}
