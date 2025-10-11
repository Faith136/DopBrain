const products = [
  { id: 'appetizers', title: 'Appetizers' },
  { id: 'main_course', title: 'Main Course' },
  { id: 'desserts', title: 'Desserts' },
  { id: 'drinks', title: 'Drinks & Sips' },
  { id: 'specials', title: 'Specials' },
  { id: 'sides', title: 'Sides (Soul Snacks)' },
  { id: 'digestives', title: 'Digestives (Reset & Recovery)' }
];
   

const activities = [
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
  },
]



const details = {
  appetizers: {
    id: "appetizers",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", // Colorful fruit bowl (fresh start, energy)
    title: "Appetizers",
    description: "Quick wins to break the doom loop and kickstart momentum.",
    activities: [
      "Drink a full glass of water",
      "Open a window and take 10 deep breaths",
      "Set a 5-minute timer and clean one surface",
      "Do a 2-minute stretch",
      "Write down one small goal for today"
    ]
  },
  main_course: {
    id: "main_course",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80", // Salmon, greens, and grains (brain food)
    title: "Main Course",
    description: "Deep focus and flow-based activities that nourish your purpose.",
    activities: [
      "Work on a passion project",
      "Learn a new skill",
      "Read a nonfiction book",
      "Build something from scratch",
      "Do a full body workout"
    ]
  },
  desserts: {
    id: "desserts",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80", // Berries and chocolate (dopamine treat)
    title: "Desserts",
    description: "Sweet, joyful activities to relax without guilt.",
    activities: [
      "Watch a wholesome show",
      "Create or update a music playlist",
      "Bake something fun",
      "Play a relaxing game",
      "Go for a walk with a podcast"
    ]
  },
  drinks: {
    id: "drinks",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", // Vibrant smoothie (refreshing boost)
    title: "Drinks & Sips",
    description: "Tiny micro-boosts for low-energy or busy moments.",
    activities: [
      "Sip a warm drink slowly",
      "Look at a calming photo",
      "Do a quick breathing exercise",
      "Say a positive affirmation",
      "Smile at yourself in the mirror"
    ]
  },
  specials: {
    id: "specials",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", // Colorful donuts (special treat, fun)
    title: "Specials",
    description: "Occasional treats done with mindfulness and intention.",
    activities: [
      "Check social media with a timer",
      "Eat a favorite snack slowly",
      "Watch one inspiring YouTube video",
      "Window shop with a budget"
    ]
  },
  sides: {
    id: "sides",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80", // Creative workspace (creative snack for the brain)
    title: "Sides (Soul Snacks)",
    description: "Creative or emotional outlets to feed your inner self.",
    activities: [
      "Journal freely about your feelings",
      "Record a voice note to your future self",
      "Create a mini video on something you care about",
      "Draw or paint without judgment",
      "Write a short poem or story"
    ]
  },
  digestives: {
    id: "digestives",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", // Calm nature scene (reset & recovery)
    title: "Digestives (Reset & Recovery)",
    description: "When overstimulated—reset your brain and return to calm.",
    activities: [
      "Put phone in another room for 30 min",
      "Lay on the floor for 10 minutes",
      "Take a silent shower",
      "Use a meditation app",
      "Walk barefoot and feel the ground"
    ]
  }
};

export async function GET() {
  // Combine products with their details
  const fullProducts = products.map((prod) => ({
    ...activities[prod.id]
  }));

  return Response.json({ products: fullProducts });
}