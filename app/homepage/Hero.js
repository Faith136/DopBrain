import styles from './hero.module.css';
import Image from 'next/image';
//import { Sparkles } from "lucide-react"
import { MoodDialog } from './Moodass';
import { useState } from 'react'; 

export default function Hero() {
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleMoodSelect = (category) => {
    if (onCategoryChange) {
      onCategoryChange(category)
    } 
  }
  return (
     <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.textContent}>
          <h1 className={styles.headline}>
            Dopamine!.
          </h1>
          
          <p className={styles.subheadline}>Your personal menu for mood-boosting activities</p>
        <p className={styles.description}>
          Just like a restaurant menu, choose from appetizers, mains, and desserts e.t.c to craft your perfect day
        </p>

          <button onClick={() => setDialogOpen(true)} size="lg"
          className={styles.cta}>Start Free Trial</button>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/Hbrain.gif" 
            alt="DopBrain Learning Visual"
            width={500}
            height={400}
            className={styles.heroImage}
          />
        </div>
      </section>
      <MoodDialog open={dialogOpen} onOpenChange={setDialogOpen} onMoodSelect={handleMoodSelect} />
    </div>
    
  )
}
