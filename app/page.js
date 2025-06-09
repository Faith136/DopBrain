import React from 'react';
import Hero from './homepage/Hero';
import Categories from './homepage/Categories';
import './globals.css'; // Import global styles
import Products from './homepage/Products';


export default function page() {
  return (
    <div> 
   <Hero/>
   <Categories/>
   <Products/>
   </div>
  )
}
