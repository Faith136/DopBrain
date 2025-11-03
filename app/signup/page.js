'use client';
import styles from './signup.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Image from "next/image";


export const metadata = {
  title: 'signup',
};

export default function SignupPage() {
  const[username, setUsername]= useState("");
const router = useRouter();



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.err);
        setLoading(false);
      } else {
        toast.success(data.message);
        setTimeout(() => {
          router.push('/login');
        }, 100);
        setLoading(false);
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
            <form onSubmit={handleSubmit} className={styles.form}>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  placeholder="username" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              <a href="#">Forgot password?</a>
              <button type="submit"  disabled={loading|| !username || !email || !password}>
                {loading ? "Signing in..." : "Sign in"}
              </button>
            
            <div className={styles.divider}>or</div>
            <button className={styles.google}>Sign in with Google</button>
            </form>
            <div className={styles.signup}>
              Already have an account? <Link href="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}