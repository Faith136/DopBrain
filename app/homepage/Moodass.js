"use client"

import { useState } from "react"
import { Sparkles, Heart, Zap, Coffee, Moon, Brain, Smile, X } from "lucide-react"
import styles from "./moodass.module.css"


const moods = [
  {
    id: "tired",
    label: "Tired & Low Energy",
    icon: <Moon className="w-6 h-6" />,
    description: "Need a gentle boost",
    recommendedCategory: "appetizers",
  },
  {
    id: "stressed",
    label: "Stressed & Overwhelmed",
    icon: <Brain className="w-6 h-6" />,
    description: "Need to calm down",
    recommendedCategory: "sides",
  },
  {
    id: "bored",
    label: "Bored & Restless",
    icon: <Zap className="w-6 h-6" />,
    description: "Need excitement",
    recommendedCategory: "digestive",
  },
  {
    id: "motivated",
    label: "Motivated & Energized",
    icon: <Coffee className="w-6 h-6" />,
    description: "Ready for action",
    recommendedCategory: "mains",
  },
  {
    id: "sad",
    label: "Sad & Down",
    icon: <Heart className="w-6 h-6" />,
    description: "Need comfort",
    recommendedCategory: "desserts",
  },
  {
    id: "good",
    label: "Good & Content",
    icon: <Smile className="w-6 h-6" />,
    description: "Want to maintain it",
    recommendedCategory: "drinks",
  },
]



export function MoodDialog({ open, onOpenChange, onMoodSelect }) {
  const [selectedMood, setSelectedMood] = useState(null)
  const [step, setStep] = useState("select")

  if (!open) return null

  const handleMoodClick = (moods) => {
    setSelectedMood(moods)
    setStep("recommend")
  }

  const handleStartJourney = () => {
    if (selectedMood) {
      onMoodSelect(selectedMood.recommendedCategory)
      onOpenChange(false)
      setTimeout(() => {
        setStep("select")
        setSelectedMood(null)
      }, 300)
    }
  }

  const handleBack = () => {
    setStep("select")
    setSelectedMood(null)
  }

  const handleClose = () => {
    onOpenChange(false)
    setTimeout(() => {
      setStep("select")
      setSelectedMood(null)
    }, 300)
  }

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleClose}>
          <X className="w-6 h-6" />
        </button>

        {step === "select" ? (
          <div className={styles.modalContent}>
            <div className={styles.header}>
              <Sparkles className="w-8 h-8" />
              <h2 className={styles.title}>How are you feeling today?</h2>
              <p className={styles.description}>Lets find the perfect dopamine boost for your current mood</p>
            </div>

            <div className={styles.moodGrid}>
              {moods.map((mood) => (
                <button key={mood.id} className={styles.moodCard} onClick={() => handleMoodClick(mood)}>
                  <div className={styles.moodIcon}>{mood.icon}</div>
                  <h3 className={styles.moodLabel}>{mood.label}</h3>
                  <p className={styles.moodDescription}>{mood.description}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.modalContent}>
            <div className={styles.header}>
              <Heart className="w-8 h-8" />
              <h2 className={styles.title}>Perfect Match Found!</h2>
              <p className={styles.description}>Based on your mood, we recommend starting with...</p>
            </div>

            <div className={styles.recommendationCard}>
              <div className={styles.recommendationIcon}>{selectedMood?.icon}</div>
              <h3 className={styles.recommendationTitle}>
                {selectedMood?.label === "Tired & Low Energy" && "Quick Energy Appetizers"}
                {selectedMood?.label === "Stressed & Overwhelmed" && "Calming Soul Snacks"}
                {selectedMood?.label === "Bored & Restless" && "Exciting Main Courses"}
                {selectedMood?.label === "Motivated & Energized" && "Power-Packed Activities"}
                {selectedMood?.label === "Sad & Down" && "Comforting Desserts"}
                {selectedMood?.label === "Good & Content" && "Refreshing Drinks & Sips"}
              </h3>
              <p className={styles.recommendationText}>
                {selectedMood?.label === "Tired & Low Energy" &&
                  "Start with quick, energizing activities that give you an instant boost without overwhelming you."}
                {selectedMood?.label === "Stressed & Overwhelmed" &&
                  "Try calming activities that help you center yourself and reduce stress levels."}
                {selectedMood?.label === "Bored & Restless" &&
                  "Dive into engaging activities that challenge you and spark excitement."}
                {selectedMood?.label === "Motivated & Energized" &&
                  "Channel that energy into productive activities that maximize your momentum."}
                {selectedMood?.label === "Sad & Down" &&
                  "Treat yourself to comforting activities that lift your spirits and bring joy."}
                {selectedMood?.label === "Good & Content" &&
                  "Maintain your positive state with refreshing activities that keep you balanced."}
              </p>
            </div>

            <div className={styles.buttonGroup}>
              <button className={styles.backButton} onClick={handleBack}>
                Choose Different Mood
              </button>
              <button className={styles.startButton} onClick={handleStartJourney}>
                Start My Journey
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
