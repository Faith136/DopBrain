import styles from './Footer.module.css';

export default function Footer() {
  return (
   <footer>
        <div className={styles['app-footer']}>
            © {new Date().getFullYear()} || faithodongo9@gmail.com || All rights reserved.            
        </div>
   </footer> 
      );
    }

    /**<nav>
            <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
            </nav> */

