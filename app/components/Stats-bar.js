"use client"

import { useState, useEffect } from "react"
import styles from "./statusbar.module.css"
import { Flame, Trophy, Target, TrendingUp } from "lucide-react"

export function StatsBar() {
  const [stats, setStats] = useState({
    streak: 0,
    totalActivities: 0,
    weeklyGoal: 0,
    weeklyProgress: 0,
  })

  useEffect(() => {
    // Load stats from localStorage
    const saved = localStorage.getItem("dopamine-stats")
    if (saved) {
      setStats(JSON.parse(saved))
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.iconWrapper}>
            <Flame className="w-5 h-5 text-accent" />
          </div>
          <div>
            <div className={styles.statValue}>{stats.streak}</div>
            <div className={styles.statLabel}>Day Streak</div>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.iconWrapper}>
            <Trophy className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className={styles.statValue}>{stats.totalActivities}</div>
            <div className={styles.statLabel}>Total Activities</div>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.iconWrapper}>
            <Target className="w-5 h-5 text-chart-3" />
          </div>
          <div>
            <div className={styles.statValue}>{stats.weeklyProgress}/7</div>
            <div className={styles.statLabel}>Weekly Goal</div>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.iconWrapper}>
            <TrendingUp className="w-5 h-5 text-chart-2" />
          </div>
          <div>
            <div className={styles.statValue}>
              {stats.totalActivities > 0 ? Math.round((stats.weeklyProgress / 7) * 100) : 0}%
            </div>
            <div className={styles.statLabel}>This Week</div>
          </div>
        </div>
      </div>
    </div>
  )
}
