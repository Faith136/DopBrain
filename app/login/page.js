'use client';
import styles from './login.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react'; // Import signIn from next-auth
import Image from 'next/image';

export const metadata = {
  title: 'login',
};

export default function LoginPage() {
const[email, setEmail]= useState("");
  const[password, setPassword]= useState("");
  const[loading, setLoading]= useState(false);

  const router = useRouter();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setLoading(true);
        const result = await signIn('credentials', {
          redirect: false,
          email,
          password,
        });
        if (result.error) {
          toast.error(result.error); // Display error message
          setLoading(false);
        } else {
          toast.success("Login successful!"); // Display success message
          router.push('/'); // Redirect to home page or any other page
         
        }
      } catch (err) {
        console.error("Error during signup:", err);
        setLoading(false);
      }
    };
  return (

    <div className={`${styles.wrapper} container`}>
      <div className={styles.container}>
        <div className={styles.leftPane}>
          <Image src="/Hbrain.gif" alt="Happy brain" className={styles.image} width="400" height="400" />
          <h2>A happy brain a happy life</h2>
          <p>Boost your focus by maintaining the levels of dopamine in your brain!</p>
        </div>
        <div className={styles.rightPane}>
          <div className={styles.logo}>DopBrain</div>
          <div >
            <h3>Welcome to DopBrain</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              <a href="#">Forgot password?</a>
              <button type="submit" disabled={loading|| !email || !password}>Login</button>
              <div className={styles.divider}>or</div>
              <button className={styles.google} >
                Sign in with Google</button>
                </form>
              <div className={styles.signup}>
                New to DopBrain? <Link href="/signup">Create Account</Link>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}


      
