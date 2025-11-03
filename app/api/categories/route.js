const categories = [
  { id: "appetizers", title: "Appetizers" },
  { id: "main_course", title: "Main Course" },
  { id: "desserts", title: "Desserts" },
  { id: "drinks", title: "Drinks & Sips" },
  { id: "specials", title: "Specials" },
  { id: "sides", title: "Sides (Soul Snacks)" },
  { id: "digestives", title: "Digestives (Reset & Recovery)" }
];

export async function GET() {
  return Response.json(categories);
}

/*const categories = [
  {
    id: "appetizers",
    name: "Appetizers",
    icon: Coffee,
    description: "Quick 5-15 min boosts to start your day",
    color: "primary",
    activities: [
      { id: 1, name: "Morning Stretch", duration: 10, difficulty: "easy", points: 10 },
      { id: 2, name: "Cold Shower", duration: 5, difficulty: "medium", points: 15 },
      { id: 3, name: "Gratitude Journal", duration: 10, difficulty: "easy", points: 10 },
      { id: 4, name: "Power Playlist", duration: 15, difficulty: "easy", points: 10 },
      { id: 5, name: "Quick Walk", duration: 15, difficulty: "easy", points: 12 },
    ],
  },
  {
    id: "mains",
    name: "Main Courses",
    icon: Utensils,
    description: "Substantial 30-60 min activities for deep satisfaction",
    color: "accent",
    activities: [
      { id: 6, name: "Workout Session", duration: 45, difficulty: "hard", points: 30 },
      { id: 7, name: "Creative Project", duration: 60, difficulty: "medium", points: 35 },
      { id: 8, name: "Deep Learning", duration: 45, difficulty: "medium", points: 30 },
      { id: 9, name: "Social Connection", duration: 60, difficulty: "easy", points: 25 },
      { id: 10, name: "Nature Hike", duration: 90, difficulty: "medium", points: 40 },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: IceCream,
    description: "Sweet rewards and wind-down activities",
    color: "chart-3",
    activities: [
      { id: 11, name: "Meditation", duration: 20, difficulty: "easy", points: 15 },
      { id: 12, name: "Reading Fiction", duration: 30, difficulty: "easy", points: 18 },
      { id: 13, name: "Hobby Time", duration: 45, difficulty: "easy", points: 20 },
      { id: 14, name: "Movie Night", duration: 120, difficulty: "easy", points: 15 },
      { id: 15, name: "Spa Routine", duration: 30, difficulty: "easy", points: 20 },
    ],
  },
]*/