import Styles from './hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
 <div className={Styles.homepage}>
     <Image src="/sport.jpg" alt="Hero" width={1600} height={500} />
    </div>
  )
}
