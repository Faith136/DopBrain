import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles["app-header"]}>

    <div className={`${styles.wrapper} container`}>
   <aside>
    <Link href ="/">Logo</Link>
   </aside>

   <aside>
    <nav>
        <ul className={styles['nav-list']}>
            <li className={styles['nav-item']}><Link href="/">Home</Link></li>
            <li className={styles['nav-item']}><Link href="/products">Products</Link></li>
            <li className={styles['nav-item']}><Link href="/cart">Cart</Link></li>
        </ul>
    </nav>
   </aside>
    </div>

    </header>

  )
}
