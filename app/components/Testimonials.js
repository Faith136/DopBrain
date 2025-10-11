"use client"

import { useState, useEffect } from "react"
import styles from "./testimonials.module.css"


export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    activity: "",
    rating: 5,
    comment: "",
  })

  // Load testimonials from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("testimonials")
    if (stored) {
      setTestimonials(JSON.parse(stored))
    }
  }, [])

  // Save testimonials to localStorage
  const saveTestimonials = (newTestimonials) => {
    setTestimonials(newTestimonials)
    localStorage.setItem("testimonials", JSON.stringify(newTestimonials || []))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editingId) {
      // Update existing testimonial
      const updated = testimonials.map((t) =>
        t.id === editingId ? { ...t, ...formData, date: new Date().toLocaleDateString() } : t,
      )
      saveTestimonials(updated)
      setEditingId(null)
    } else {
      // Add new testimonial
      const newTestimonial = {
        id: Date.now().toString(),
        ...formData,
        date: new Date().toLocaleDateString(),
      }
      saveTestimonials([newTestimonial, ...(testimonials || [])])
    }

    // Reset form
    setFormData({ name: "", activity: "", rating: 5, comment: "" })
    setIsFormOpen(false)
  }

  const handleEdit = (testimonial) => {
    setFormData({
      name: testimonial.name,
      activity: testimonial.activity,
      rating: testimonial.rating,
      comment: testimonial.comment,
    })
    setEditingId(testimonial.id)
    setIsFormOpen(true)
  }

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      saveTestimonials(testimonials.filter((t) => t.id !== id))
    }
  }

  const handleCancel = () => {
    setFormData({ name: "", activity: "", rating: 5, comment: "" })
    setEditingId(null)
    setIsFormOpen(false)
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Community Testimonials</h2>
          <p className={styles.subtitle}>Share how our activities have helped boost dopamine levels</p>
          <button onClick={() => setIsFormOpen(true)} className={styles.addButton}>
            + Share Your Experience
          </button>
        </div>

        {/* Testimonial Form */}
        {isFormOpen && (
          <div className={styles.formOverlay} onClick={handleCancel}>
            <div className={styles.formContainer} onClick={(e) => e.stopPropagation()}>
              <div className={styles.formHeader}>
                <h3>{editingId ? "Edit Testimonial" : "Share Your Experience"}</h3>
                <button onClick={handleCancel} className={styles.closeButton}>
                  ×
                </button>
              </div>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label>Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Enter your name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Activity Name</label>
                  <input
                    type="text"
                    value={formData.activity}
                    onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                    required
                    placeholder="e.g., Morning Stretch, Cold Shower"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Rating</label>
                  <div className={styles.ratingInput}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className={star <= formData.rating ? styles.starActive : styles.star}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label>Your Testimonial</label>
                  <textarea
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    required
                    placeholder="Share how this activity helped boost your mood..."
                    rows={4}
                  />
                </div>
                <div className={styles.formActions}>
                  <button type="button" onClick={handleCancel} className={styles.cancelButton}>
                    Cancel
                  </button>
                  <button type="submit" className={styles.submitButton}>
                    {editingId ? "Update" : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Testimonials Grid */}
        <div className={styles.grid}>
          {testimonials.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No testimonials yet. Be the first to share your experience!</p>
            </div>
          ) : (
            testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h4 className={styles.name}>{testimonial.name}</h4>
                    <p className={styles.activity}>{testimonial.activity}</p>
                  </div>
                  <div className={styles.actions}>
                    <button onClick={() => handleEdit(testimonial)} className={styles.editButton} title="Edit">
                      ✏️
                    </button>
                    <button onClick={() => handleDelete(testimonial.id)} className={styles.deleteButton} title="Delete">
                      🗑️
                    </button>
                  </div>
                </div>
                <div className={styles.rating}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? styles.starFilled : styles.starEmpty}>
                      ★
                    </span>
                  ))}
                </div>
                <p className={styles.comment}>{testimonial.comment}</p>
                <p className={styles.date}>{testimonial.date}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
