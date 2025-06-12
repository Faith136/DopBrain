const products = [
  { id: 'appetizers', title: 'Appetizers' },
  { id: 'main_course', title: 'Main Course' },
  { id: 'desserts', title: 'Desserts' },
  { id: 'drinks', title: 'Drinks & Sips' },
  { id: 'specials', title: 'Specials' },
  { id: 'sides', title: 'Sides (Soul Snacks)' },
  { id: 'digestives', title: 'Digestives (Reset & Recovery)' }
];

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
    ...details[prod.id]
  }));

  return Response.json({ products: fullProducts });
}