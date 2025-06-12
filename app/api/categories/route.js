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