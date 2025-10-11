'use client'
import styles from './header.module.css';
import Link from 'next/link';
import {useSession, signOut} from 'next-auth/react';

export default function Header() {
  const { data,status } = useSession();

  return (
    <header className={styles["app-header"]}>

    <div className={`${styles.wrapper} container`}>
   <aside>
    <Link href ="/">🧠DopBrain</Link>
   </aside>

    
   <aside>
    <nav>
        <ul className={styles['nav-list']}>
  <li className={styles['nav-item']}><Link href="/">Home</Link></li>
  <li className={styles['nav-item']}><Link href="/cart">Daily Streaks</Link></li>
  <li className={styles['nav-item']}>
  {status === "authenticated" ? (
    <button
      className={styles['create-account']}
      onClick={() => {
        if (window.confirm("Are you sure you want to log out?")) {
          signOut();
        }
      }}>
          {data?.user?.name}
    </button>
  ) : (
    <button className={styles['create-account']}>
      <Link href="/login">Create Account</Link>
    </button>
  )}
</li>
</ul>
    </nav>  
   </aside>
    </div>

    </header>

  )
}
