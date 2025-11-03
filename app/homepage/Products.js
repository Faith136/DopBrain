"use client";
import { useState, useMemo, useEffect } from "react";
import styles from "./products.module.css";
import Link from "next/link";
import ProductCard from "../components/ProductCard";

export default function Products({ selectedCategory }) {
  // Sample product data
  const products = [
  // Digestive Check - Mindful reflection activities
  {
    id: 1,
    name: "Morning Meditation",
    duration: 15,
    difficulty: "easy",
    points: 15,
    description: "Center yourself with guided meditation",
    category: "digestive",
  },
  {
    id: 2,
    name: "Evening Reflection",
    duration: 20,
    difficulty: "easy",
    points: 20,
    description: "Review your day and set intentions",
    category: "digestive",
  },
  {
    id: 3,
    name: "Breath Work",
    duration: 10,
    difficulty: "easy",
    points: 10,
    description: "Deep breathing exercises for clarity",
    category: "digestive",
  },
  {
    id: 4,
    name: "Body Scan",
    duration: 15,
    difficulty: "medium",
    points: 15,
    description: "Check in with your physical sensations",
    category: "digestive",
  },

  // Appetizers - Quick boosts
  {
    id: 5,
    name: "Morning Stretch",
    duration: 10,
    difficulty: "easy",
    points: 10,
    description: "Start your day with gentle stretching",
    category: "appetizers",
  },
  {
    id: 6,
    name: "Cold Shower",
    duration: 15,
    difficulty: "medium",
    points: 15,
    description: "Boost alertness and circulation",
    category: "appetizers",
  },
  {
    id: 7,
    name: "Power Playlist",
    duration: 10,
    difficulty: "easy",
    points: 5,
    description: "Listen to your favorite energizing music",
    category: "appetizers",
  },
  {
    id: 8,
    name: "Quick Walk",
    duration: 15,
    difficulty: "easy",
    points: 10,
    description: "Get moving with a brisk walk",
    category: "appetizers",
  },

  // Main Course - Substantial activities
  {
    id: 9,
    name: "Gym Workout",
    duration: 60,
    difficulty: "hard",
    points: 50,
    description: "Full body strength training session",
    category: "mains",
  },
  {
    id: 10,
    name: "Creative Project",
    duration: 45,
    difficulty: "medium",
    points: 40,
    description: "Work on your passion project",
    category: "mains",
  },
  {
    id: 11,
    name: "Deep Work Session",
    duration: 90,
    difficulty: "hard",
    points: 60,
    description: "Focused work on important tasks",
    category: "mains",
  },
  {
    id: 12,
    name: "Learning Time",
    duration: 45,
    difficulty: "medium",
    points: 35,
    description: "Study something new and challenging",
    category: "mains",
  },

  // Desserts - Rewards and wind-down
  {
    id: 13,
    name: "Gratitude Journal",
    duration: 10,
    difficulty: "easy",
    points: 10,
    description: "Write down 3 things you're grateful for",
    category: "desserts",
  },
  {
    id: 14,
    name: "Favorite Show",
    duration: 30,
    difficulty: "easy",
    points: 5,
    description: "Enjoy an episode of your comfort show",
    category: "desserts",
  },
  {
    id: 15,
    name: "Bubble Bath",
    duration: 30,
    difficulty: "easy",
    points: 15,
    description: "Relax in a warm, soothing bath",
    category: "desserts",
  },
  {
    id: 16,
    name: "Reading Time",
    duration: 30,
    difficulty: "easy",
    points: 20,
    description: "Get lost in a good book",
    category: "desserts",
  },

  // Drinks & Sips - Micro-activities
  {
    id: 17,
    name: "Hydration Break",
    duration: 2,
    difficulty: "easy",
    points: 2,
    description: "Drink a full glass of water",
    category: "drinks",
  },
  {
    id: 18,
    name: "Tea Ritual",
    duration: 5,
    difficulty: "easy",
    points: 5,
    description: "Mindfully prepare and enjoy tea",
    category: "drinks",
  },
  {
    id: 19,
    name: "Smoothie Time",
    duration: 10,
    difficulty: "easy",
    points: 8,
    description: "Blend a nutritious smoothie",
    category: "drinks",
  },
  {
    id: 20,
    name: "Coffee Moment",
    duration: 5,
    difficulty: "easy",
    points: 5,
    description: "Savor your morning coffee",
    category: "drinks",
  },

  // Sides - Soul snacks
  {
    id: 21,
    name: "Call a Friend",
    duration: 15,
    difficulty: "easy",
    points: 15,
    description: "Connect with someone you care about",
    category: "sides",
  },
  {
    id: 22,
    name: "Pet Cuddles",
    duration: 10,
    difficulty: "easy",
    points: 10,
    description: "Spend quality time with your pet",
    category: "sides",
  },
  {
    id: 23,
    name: "Nature Moment",
    duration: 15,
    difficulty: "easy",
    points: 12,
    description: "Step outside and appreciate nature",
    category: "sides",
  },
  {
    id: 24,
    name: "Compliment Someone",
    duration: 5,
    difficulty: "easy",
    points: 8,
    description: "Brighten someone's day with kindness",
    category: "sides",
  },

  // Sweets - Indulgent moments
  {
    id: 25,
    name: "Dance Party",
    duration: 15,
    difficulty: "easy",
    points: 15,
    description: "Dance like nobody's watching",
    category: "sweets",
  },
  {
    id: 26,
    name: "Favorite Snack",
    duration: 10,
    difficulty: "easy",
    points: 5,
    description: "Enjoy your favorite treat mindfully",
    category: "sweets",
  },
  {
    id: 27,
    name: "Funny Videos",
    duration: 15,
    difficulty: "easy",
    points: 8,
    description: "Watch something that makes you laugh",
    category: "sweets",
  },
  {
    id: 28,
    name: "Nap Time",
    duration: 20,
    difficulty: "easy",
    points: 10,
    description: "Take a refreshing power nap",
    category: "sweets",
  }
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  const filteredActivities = useMemo(() => {
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    setVisibleCount(3);
  }, [selectedCategory]);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const displayedActivities = filteredActivities.slice(0, visibleCount);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>List of Activities to Boost Your Day</h2>
        <p className={styles.subtitle}>Hey choose your favourite?.</p>

        <div className={styles.activitiesGrid}>
          {displayedActivities.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {visibleCount < filteredActivities.length && (
          <div className={styles.viewMoreContainer}>
            <button onClick={handleViewMore} className={styles.viewMoreButton}>
              View more
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
